import { IEvent } from "../@types/generated/contentful";

type EventProps = {
    entry: IEvent;
};

const Event: React.FC<EventProps> = ({ entry }) => {
    return (
        <>{entry.fields.title} at slug {entry.fields.slug}</>
    );
};

export default Event;
