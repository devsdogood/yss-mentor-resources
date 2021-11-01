import { IResource } from "../../@types/generated/contentful";

type ResourcePreviewProps = {
  entry: IResource;
};

const ResourcePreview: React.FC<ResourcePreviewProps> = ({ entry }) => {
  return (
    <p>
      {entry.fields.title} at slug{" "}
      <a href={`/resources/${entry.fields.slug}`}>{entry.fields.slug}</a>
    </p>
  );
};

export default ResourcePreview;
