import { IResource } from "../@types/generated/contentful";

type ResourceProps = {
    entry: IResource;
};

const Resource: React.FC<ResourceProps> = ({ entry }) => {
    return (
        <div><b>Resource</b>{' '}{entry.fields.title} at slug {entry.fields.slug}</div>
    );
};

export default Resource;
