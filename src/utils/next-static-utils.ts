import { EntryCollection } from "contentful";
import { GetStaticPaths, GetStaticProps } from "next";
import { Params } from "next/dist/server/router";
import { ContentTypes } from "@src//types/contentTypes";
import collectionData from "@utils/collections.preval";

export const getStaticPathsGeneric = <T extends { slug: string }>(
  contentType: ContentTypes
): GetStaticPaths => {
  return async () => {
    const entries = collectionData[contentType] as EntryCollection<T>;

    const paths = entries.items.map((entry) => ({
      params: { slug: entry.fields.slug },
    }));

    return { paths, fallback: false };
  };
};

export const getStaticPropsGeneric = <T extends { slug: string }>(
  contentType: ContentTypes
): GetStaticProps => {
  return async ({ params: { slug = [] } }: Params) => {
    const entries = collectionData[contentType] as EntryCollection<T>;
    const entry = entries.items.find((entry) => entry.fields.slug === slug);

    return {
      props: {
        entry,
      },
    };
  };
};
