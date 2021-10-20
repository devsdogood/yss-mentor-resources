import { EntryCollection } from 'contentful';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Params } from 'next/dist/server/router';
import { IPageFields } from '../@types/generated/contentful';
import getContentful from '../utils/contentful';

const SlugPage: NextPage<{slug: string[] | null}> = ({ slug }) => {
  return <div>New page, slug {slug?.join('/')}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const contentful = await getContentful();
  const pages = await contentful.getEntries({ content_type: 'page' }) as EntryCollection<IPageFields>;

  const paths = pages.items.map((page) => ({
    // Paths are in the format /{route}/{subroute}
    // so we split and remove the first element to get [{route}, {subroute}]
    params: { slug: page.fields.slug.split('/').slice(1) }
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = ({ params: { slug = null } }: Params) => {
  return {
    props: {
      slug: slug,
    },
  };
}

export default SlugPage;
