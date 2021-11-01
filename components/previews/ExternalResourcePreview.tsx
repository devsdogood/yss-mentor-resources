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
      <a href={entry.fields.slug}>{entry.fields.slug}</a>
    </p>
  );
};

export default ExternalResourcePreview;
