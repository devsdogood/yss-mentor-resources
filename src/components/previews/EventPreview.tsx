import Link from 'next/link'
import { IEvent } from "@src/types/generated/contentful";

type EventPreviewProps = {
  entry: IEvent;
};

const EventPreview: React.FC<EventPreviewProps> = ({ entry }) => {
  return (
    <p>
      {entry.fields.title} at slug{" "}
      <Link href={`/events/${entry.fields.slug}`}>{entry.fields.slug}</Link>
    </p>
  );
};

export default EventPreview;
