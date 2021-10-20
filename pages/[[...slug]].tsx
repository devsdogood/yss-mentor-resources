import { EntryCollection } from 'contentful';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Params } from 'next/dist/server/router';
import { IPage, IPageFields } from '../@types/generated/contentful';
import getContentful from '../utils/contentful';
import Custom404Page from './404';

const SlugPage: NextPage<{page: IPage | false}> = ({ page }) => {
  if (!page) return <Custom404Page />

  return <div>New page, slug {page.fields.slug}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const contentful = await getContentful();
  const pages = await contentful.getEntries({ content_type: 'page', select: 'fields.slug' }) as EntryCollection<IPageFields>;

  const paths = pages.items.map((page) => ({
    // Paths are in the format /{route}/{subroute}
    // so we split and remove the first element to get [{route}, {subroute}]
    params: { slug: page.fields.slug.split('/').slice(1) }
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params: { slug = [] } }: Params) => {
  // The slug is passed as an array of routes, need to join back as a string
  const contentfulSlug = ['', ...slug].join('/');

  const contentful = await getContentful();
  const pagesQuery = await contentful.getEntries({ content_type: 'page', 'fields.slug': contentfulSlug });
  const page = pagesQuery.items?.[0] as IPage || false;

  return {
    props: {
      page: page,
    },
  };
}

export default SlugPage;
