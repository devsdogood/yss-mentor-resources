import { IEvent } from "../../@types/generated/contentful";

type EventPreviewProps = {
  entry: IEvent;
};

const EventPreview: React.FC<EventPreviewProps> = ({ entry }) => {
  return (
    <p>
      {entry.fields.title} at slug{" "}
      <a href={`/events/${entry.fields.slug}`}>{entry.fields.slug}</a>
    </p>
  );
};

export default EventPreview;
