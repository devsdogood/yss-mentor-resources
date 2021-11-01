import Link from 'next/link'
import { IExternalResource } from "../../@types/generated/contentful";

type ExternalResourcePreviewProps = {
  entry: IExternalResource;
};

const ExternalResourcePreview: React.FC<ExternalResourcePreviewProps> = ({
  entry,
}) => {
  return (
    <p>
      {entry.fields.title} at slug{" "}
      <Link href={entry.fields.slug}>{entry.fields.slug}</Link>
    </p>
  );
};

export default ExternalResourcePreview;
