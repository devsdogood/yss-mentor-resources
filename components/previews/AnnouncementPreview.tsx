import { IAnnouncement } from "../../@types/generated/contentful";

type AnnouncementPreviewProps = {
    entry: IAnnouncement;
}

const AnnouncementPreview: React.FC<AnnouncementPreviewProps> = ({ entry }) => {
    return (
        <>
            {entry.fields.title} at slug {entry.fields.slug}
        </>
    );
};

export default AnnouncementPreview;
