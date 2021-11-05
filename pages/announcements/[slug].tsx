import { ContentTypes } from "../../@types/contentTypes";
import { IAnnouncementFields } from "../../@types/generated/contentful";
import AnnouncementView from "../../components/views/AnnouncementView";
import {
  getStaticPathsGeneric,
  getStaticPropsGeneric
} from "../../utils/next-static-utils";

export default AnnouncementView;

export const getStaticPaths = getStaticPathsGeneric<IAnnouncementFields>(
  ContentTypes.Announcement
);

export const getStaticProps = getStaticPropsGeneric<IAnnouncementFields>(
  ContentTypes.Announcement
);
