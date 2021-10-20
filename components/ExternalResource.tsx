import { IExternalResource } from "../@types/generated/contentful";

type ExternalResourceProps = {
    entry: IExternalResource;
};

const ExternalResource: React.FC<ExternalResourceProps> = ({ entry }) => {
    return (
        <><b>External Resource</b>{' '}{entry.fields.title} at slug {entry.fields.slug}</>
    );
};

export default ExternalResource;
