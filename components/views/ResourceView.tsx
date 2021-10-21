import { IResource } from "../../@types/generated/contentful";

type ResourceViewProps = {
    entry: IResource;
};

const ResourceView: React.FC<ResourceViewProps> = ({ entry }) => {
    return (
        <div><b>Full resource view!</b>{' '}{entry.fields.title} at slug {entry.fields.slug}</div>
    );
};

export default ResourceView;
