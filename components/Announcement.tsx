import { IAnnouncement } from "../@types/generated/contentful";

type AnnouncementProps = {
    entry: IAnnouncement;
}

const Announcement: React.FC<AnnouncementProps> = ({ entry }) => {
    return (
        <>
            {entry.fields.title} at slug {entry.fields.slug}
        </>
    );
};

export default Announcement;
