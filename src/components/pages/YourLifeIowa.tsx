import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IContentSection } from "@src/types/generated/contentful";
import { defaultRenderOptions } from "@utils/render-options";
import Image from "next/image";

type ContentSectionProps = { entry: IContentSection };

const YourLifeIowa: React.FC<ContentSectionProps> = ({ entry }) => {
  return (
    <div
      className="container is-fluid"
      style={{
        fontSize: "1.56rem",
      }}
    >
      <div className="columns is-centered is-gapless">
        <div className="column is-4">
          <Image
            src="/YLI-Horz-Orange.png"
            height={280}
            width={448}
            layout="responsive"
            alt="Your Life Iowa Logo"
          />
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-10">
          {documentToReactComponents(entry.fields.content, defaultRenderOptions)}
        </div>
      </div>
    </div>
  );
};

export default YourLifeIowa;
