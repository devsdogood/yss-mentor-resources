import Home from "@components/pages/Home";
import YourLifeIowa from "@components/pages/YourLifeIowa";
import ReferAFriend from "@components/pages/ReferAFriend";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IContentSection } from "@src/types/generated/contentful";
import { defaultRenderOptions } from "@utils/render-options";
import { useRouter } from "next/router";

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
        <>
          <div
            className="container is-fluid is-hidden-touch"
            style={{
              paddingLeft: "8.52rem",
              paddingRight: "6rem",
              fontSize: "1.13rem",
            }}
          >
            {ContainerContent}
          </div>
          <div className="container is-fluid is-hidden-desktop">
            {ContainerContent}
          </div>
        </>
      );
  }
};

export default ContentSection;
