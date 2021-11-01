import { INewsletter } from "../../@types/generated/contentful";

type NewsletterPreviewProps = {
  entry: INewsletter;
};

const NewsletterPreview: React.FC<NewsletterPreviewProps> = ({ entry }) => {
  return (
    <p>
      {entry.fields.title} at slug{" "}
      <a href={`/newsletters/${entry.fields.slug}`}>{entry.fields.slug}</a>
    </p>
  );
};

export default NewsletterPreview;
