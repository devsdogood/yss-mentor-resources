import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IAnnouncement } from "@src/types/generated/contentful";

type AnnouncementViewProps = {
    entry: IAnnouncement;
}

const AnnouncementView: React.FC<AnnouncementViewProps> = ({ entry }) => {
    return (
        <> 
            <b>Full announcement!</b>{' '}{entry.fields.title} at slug {entry.fields.slug}
            <p>{entry.fields.description}</p>
            <p>{documentToReactComponents(entry.fields.content)}</p>
            
        </>
    );
};

export default AnnouncementView;
