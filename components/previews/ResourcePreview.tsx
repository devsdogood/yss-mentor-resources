import Link from 'next/link'
import { IResource } from "../../@types/generated/contentful";

type ResourcePreviewProps = {
  entry: IResource;
};

const ResourcePreview: React.FC<ResourcePreviewProps> = ({ entry }) => {
  return (
    <p>
      {entry.fields.title} at slug{" "}
      <Link href={`/resources/${entry.fields.slug}`}>{entry.fields.slug}</Link>
    </p>
  );
};

export default ResourcePreview;
