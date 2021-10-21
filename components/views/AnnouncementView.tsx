import { IAnnouncement } from "../../@types/generated/contentful";

type AnnouncementViewProps = {
    entry: IAnnouncement;
}

const AnnouncementView: React.FC<AnnouncementViewProps> = ({ entry }) => {
    return (
        <>
            <b>Full announcement!</b>{' '}{entry.fields.title} at slug {entry.fields.slug}
        </>
    );
};

export default AnnouncementView;
