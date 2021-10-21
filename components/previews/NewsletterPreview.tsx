import { INewsletter } from "../../@types/generated/contentful";

type NewsletterPreviewProps = {
    entry: INewsletter;
}

const NewsletterPreview: React.FC<NewsletterPreviewProps> = ({ entry }) => {
    return (
        <>
            {entry.fields.title} at slug {entry.fields.slug}
        </>
    );
};

export default NewsletterPreview;
