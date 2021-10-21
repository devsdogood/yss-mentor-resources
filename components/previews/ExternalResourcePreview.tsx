import { IExternalResource } from "../../@types/generated/contentful";

type ExternalResourcePreviewProps = {
    entry: IExternalResource;
};

const ExternalResourcePreview: React.FC<ExternalResourcePreviewProps> = ({ entry }) => {
    return (
        <><b>External Resource</b>{' '}{entry.fields.title} at slug {entry.fields.slug}</>
    );
};

export default ExternalResourcePreview;
