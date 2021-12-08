import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IAnnouncement } from "@src/types/generated/contentful";
import Link from "next/link";

type AnnouncementViewProps = {
  entry: IAnnouncement;
};

const AnnouncementView: React.FC<AnnouncementViewProps> = ({ entry }) => {
  return (
    <div className="container">
      {/* <b>Full announcement!</b>{' '}{entry.fields.title} at slug {entry.fields.slug} */}
      <Link href="/announcements">
        <span className="yss-color-core selectable is-underlined is-size-5">
          &larr; Announcements
        </span>
      </Link>
      <div className="box mt-4">
        <h1 className="title is-1 yss-color-dark-grey">{entry.fields.title}</h1>
        <h5 className="subtitle is-6 yss-color-light-grey">Published at: {(new Date(entry.sys.updatedAt)).toLocaleString()}</h5>
        <hr style={{border: "solid", borderWidth: "0.25em", borderRadius: "0.25em", borderColor:"var(--yss-dark-gray)"}}/>
        <p>{documentToReactComponents(entry.fields.content)}</p>
      </div>
    </div>
  );
};

export default AnnouncementView;
