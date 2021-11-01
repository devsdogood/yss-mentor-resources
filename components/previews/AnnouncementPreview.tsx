import Link from 'next/link'
import { IAnnouncement } from "../../@types/generated/contentful";

type AnnouncementPreviewProps = {
  entry: IAnnouncement;
};

const AnnouncementPreview: React.FC<AnnouncementPreviewProps> = ({ entry }) => {
  return (
    <p>
      {entry.fields.title} at slug{" "}
      <Link href={`/announcements/${entry.fields.slug}`}>{entry.fields.slug}</Link>
    </p>
  );
};

export default AnnouncementPreview;
