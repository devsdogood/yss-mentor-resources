import ContentSection from "@components/views/ContentSection";
import { ContentTypes } from "@src/types/contentTypes";
import { IPageFields } from "@src/types/generated/contentful";
import {
    getStaticPathsGeneric,
    getStaticPropsGeneric
} from "@utils/next-static-utils";

export default ContentSection;

export const getStaticPaths = getStaticPathsGeneric<IPageFields>(
  ContentTypes.Page
);

export const getStaticProps = getStaticPropsGeneric<IPageFields>(
  ContentTypes.Page
);
