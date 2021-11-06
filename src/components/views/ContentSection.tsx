import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IContentSection } from "@src/types/generated/contentful";

type ContentSectionProps = { entry: IContentSection };

const ContentSection: React.FC<ContentSectionProps> = ({ entry }: ContentSectionProps) => (
  <>
    {documentToReactComponents(entry.fields.content)}
    <b>this is the content page</b>
  </>
);

export default ContentSection;
