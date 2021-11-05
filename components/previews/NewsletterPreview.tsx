import Link from 'next/link'
import { INewsletter } from "../../@types/generated/contentful";

type NewsletterPreviewProps = {
  entry: INewsletter;
};

const NewsletterPreview: React.FC<NewsletterPreviewProps> = ({ entry }) => {
  return (
    <p>
      {entry.fields.title} at slug{" "}
      <Link href={`/newsletters/${entry.fields.slug}`}>{entry.fields.slug}</Link>
    </p>
  );
};

export default NewsletterPreview;
