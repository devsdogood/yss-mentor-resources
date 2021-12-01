import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IFooterFields } from "@src/types/generated/contentful";
import { defaultRenderOptions } from "@utils/render-options";

type FooterProps = {
  entry: IFooterFields;
};

const Footer: React.FC<FooterProps> = ({ entry }) => (
  <footer className="footer mt-6">
    <div className="container">
      <div className="content columns">
        <div className="column">
          {documentToReactComponents(
            entry.leftAlignedContent!,
            defaultRenderOptions
          )}
        </div>
        <div className="column has-text-right">
          {documentToReactComponents(
            entry.rightAlignedContent!,
            defaultRenderOptions
          )}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
