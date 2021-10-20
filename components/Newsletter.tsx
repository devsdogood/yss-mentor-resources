import { INewsletter } from "../@types/generated/contentful";

type NewsletterProps = {
    entry: INewsletter;
}

const Newsletter: React.FC<NewsletterProps> = ({ entry }) => {
    return (
        <>
            {entry.fields.title} at slug {entry.fields.slug}
        </>
    );
};

export default Newsletter;
