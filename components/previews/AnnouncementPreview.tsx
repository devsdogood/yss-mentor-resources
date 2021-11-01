import { IAnnouncement } from "../../@types/generated/contentful";

type AnnouncementPreviewProps = {
  entry: IAnnouncement;
};

const AnnouncementPreview: React.FC<AnnouncementPreviewProps> = ({ entry }) => {
  return (
    <p>
      {entry.fields.title} at slug{" "}
      <a href={`/announcements/${entry.fields.slug}`}>{entry.fields.slug}</a>
    </p>
  );
};

export default AnnouncementPreview;
