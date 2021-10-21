import { IEvent } from "../../@types/generated/contentful";

type EventPreviewProps = {
    entry: IEvent;
};

const EventPreview: React.FC<EventPreviewProps> = ({ entry }) => {
    return (
        <>{entry.fields.title} at slug {entry.fields.slug}</>
    );
};

export default EventPreview;
