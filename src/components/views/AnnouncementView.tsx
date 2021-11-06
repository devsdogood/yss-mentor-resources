import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IAnnouncement } from "@src/types/generated/contentful";
import Link from "next/link";

type AnnouncementViewProps = {
  entry: IAnnouncement;
};

const AnnouncementView: React.FC<AnnouncementViewProps> = ({ entry }) => {
  return (
    <>
      {/* <b>Full announcement!</b>{' '}{entry.fields.title} at slug {entry.fields.slug} */}
      <Link href="/announcements">
        <span className="yss-color-core selectable is-underlined is-size-4">
          <span className="icon">
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
          </span>
          Announcements
        </span>
      </Link>
      <div className="box">
        <p>{documentToReactComponents(entry.fields.content)}</p>
      </div>
    </>
  );
};

export default AnnouncementView;
