import { EntryCollection } from "contentful";
import { GetStaticPaths, GetStaticProps } from "next";
import { Params } from "next/dist/server/router";
import { ContentTypes } from "../../@types/contentTypes";
import { IResourceFields } from "../../@types/generated/contentful";
import ResourceView from "../../components/views/ResourceView";
import collectionData from '../../utils/collections.preval';

export default ResourceView;

export const getStaticPaths: GetStaticPaths = async () => {
  const resources = collectionData[ContentTypes.Resource] as EntryCollection<IResourceFields>;

  const paths = resources.items.map((resource) => ({
    params: { slug: resource.fields.slug }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug = [] } }: Params) => {
  const resources = collectionData[ContentTypes.Resource] as EntryCollection<IResourceFields>;
  const resource = resources.items.find((resource) => resource.fields.slug === slug);

  return {
    props: {
      entry: resource,
    },
  };
}
