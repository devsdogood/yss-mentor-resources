import React from "react";
import { EntryCollection } from "contentful";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Params } from "next/dist/server/router";
import {
  CollectionMap,
  ContentTypes,
  IPageFieldsItem,
  isIPageFieldsItem,
} from "@src/types/contentTypes";
import {
  IContentSection,
  IPage,
  IPageFields,
} from "@src/types/generated/contentful";
import getContentful from "@utils/contentful";
import BlockRenderer from "@wrappers/BlockRenderer";
import Custom404Page from "@pages/404";
import collectionData from "@utils/collections.preval";

import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const SlugPage: NextPage<{ page: IPage | false }> = ({ page }) => {
  if (!page) return <Custom404Page />;

  return (
    <>
      <Head>
        <title>{page.fields.title}</title>
        <meta name="description" content={page.fields.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <BlockRenderer block={page} />
    </>
  );
};

const convertToAllEntries = <T extends IPageFieldsItem | IContentSection>(
  block: T
): T => {
  if (isIPageFieldsItem(block) && block.fields.useMostRecent) {
    const contentType = CollectionMap[block.sys.contentType.sys.id];

    const allEntries = contentType.map(
      (ctype) => collectionData[ctype].items
    )[0] as typeof block.fields.content;
    const entries = allEntries
      // Limit entries
      .slice(0, block.fields.limit)
      // Sory by createdAt descending
      .sort(
        (entry1, entry2) =>
          new Date(entry2.sys.createdAt).getTime() -
          new Date(entry1.sys.createdAt).getTime()
      );

    return {
      ...block,
      fields: { content: entries },
    };
  }

  return block;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const contentful = await getContentful();
  const pages = (await contentful.getEntries({
    content_type: ContentTypes.Page,
    select: "fields.slug",
  })) as EntryCollection<IPageFields>;

  const paths = pages.items.map((page) => ({
    // Paths are in the format /{route}/{subroute}/
    // so we split and remove the first and last elements to get [{route}, {subroute}]
    params: { slug: page.fields.slug.split("/").slice(1, -1) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
  params: { slug = [] },
}: Params) => {
  // The slug is passed as an array of routes, need to join back as a string
  const contentfulSlug = ["", ...slug, ""].join("/");

  const contentful = await getContentful();
  const pagesQuery = await contentful.getEntries({
    content_type: ContentTypes.Page,
    "fields.slug": contentfulSlug,
    include: 5,
  });
  const page = (pagesQuery.items?.[0] as IPage) || false;

  // Get prevalled entries for collections where useMostRecent is true
  page.fields.content = page.fields.content.map(convertToAllEntries);

  return {
    props: {
      page: page,
    },
  };
};

export default SlugPage;
