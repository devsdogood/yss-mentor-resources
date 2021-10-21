import { EntryCollection } from "contentful";
import { GetStaticPaths, GetStaticProps } from "next";
import { Params } from "next/dist/server/router";
import { ContentTypes } from "../../@types/contentTypes";
import { IAnnouncementFields } from "../../@types/generated/contentful";
import Announcement from "../../components/Announcement";
import collectionData from '../../utils/collections.preval';

export default Announcement;

export const getStaticPaths: GetStaticPaths = async () => {
    const announcements = collectionData[ContentTypes.Announcement] as EntryCollection<IAnnouncementFields>;
  
    const paths = announcements.items.map((announcement) => ({
      params: { slug: announcement.fields.slug }
    }));
  
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug = [] } }: Params) => {
    const announcements = collectionData[ContentTypes.Announcement] as EntryCollection<IAnnouncementFields>;
    const announcement = announcements.items.find((announcement) => announcement.fields.slug === slug);

    return {
      props: {
        entry: announcement,
      },
    };
}
