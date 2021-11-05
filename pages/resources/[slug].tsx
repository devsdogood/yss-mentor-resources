import { ContentTypes } from "../../@types/contentTypes";
import { IResourceFields } from "../../@types/generated/contentful";
import ResourceView from "../../components/views/ResourceView";
import {
  getStaticPathsGeneric,
  getStaticPropsGeneric,
} from "../../utils/next-static-utils";

export default ResourceView;

export const getStaticPaths = getStaticPathsGeneric<IResourceFields>(
  ContentTypes.Resource
);

export const getStaticProps = getStaticPropsGeneric<IResourceFields>(
  ContentTypes.Resource
);
