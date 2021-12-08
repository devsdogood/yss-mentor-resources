import Home from "@components/pages/Home";
import YourLifeIowa from "@components/pages/YourLifeIowa";
import ReferAFriend from "@components/pages/ReferAFriend";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IContentSection } from "@src/types/generated/contentful";
import { defaultRenderOptions } from "@utils/render-options";
import { useRouter } from "next/router";
import ResponsiveContainer from "@wrappers/ResponsiveContainer";

type ContentSectionProps = { entry: IContentSection };

const ContentSection: React.FC<ContentSectionProps> = ({
  entry,
}: ContentSectionProps) => {
  const { asPath } = useRouter();
  switch (asPath) {
    case "/":
      return <Home entry={entry} />;
    case "/your-life-iowa":
      return <YourLifeIowa entry={entry} />;
    case "/refer-a-friend":
      return <ReferAFriend entry={entry} />;
    default:
      const ContainerContent = documentToReactComponents(
        entry.fields.content,
        defaultRenderOptions
      );

      return (
        <ResponsiveContainer>
          {ContainerContent}
        </ResponsiveContainer>
      );
  }
};

export default ContentSection;
