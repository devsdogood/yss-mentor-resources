import { IResource } from "../../@types/generated/contentful";

type ResourcePreviewProps = {
    entry: IResource;
};

const ResourcePreview: React.FC<ResourcePreviewProps> = ({ entry }) => {
    return (
        <div><b>Resource</b>{' '}{entry.fields.title} at slug {entry.fields.slug}</div>
    );
};

export default ResourcePreview;
