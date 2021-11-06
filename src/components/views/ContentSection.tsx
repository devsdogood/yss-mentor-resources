import Home from "@components/pages/Home";
import YourLifeIowa from "@components/pages/YourLifeIowa";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { IContentSection } from "@src/types/generated/contentful";
import { useRouter } from "next/router";

type ContentSectionProps = { entry: IContentSection };

const defaultRenderOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (_, children) => (
      <h1 className="title is-1">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_, children) => (
      <h2 className="title is-2">{children}</h2>
    ),
    [BLOCKS.PARAGRAPH]: (_, children) => <p className="mb-5">{children}</p>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <p>
        <a
          href={node.data.target.fields.file.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          {node.data.target.fields.title}
        </a>
      </p>
    ),
  },
};

const ContentSection: React.FC<ContentSectionProps> = ({
  entry,
}: ContentSectionProps) => {
  const { asPath } = useRouter();
  switch (asPath) {
    case "/":
      return <Home entry={entry} />;
    case "/your-life-iowa":
      return <YourLifeIowa entry={entry} />;
    default:
      return (
        <div
          className="container is-fluid"
          style={{
            paddingLeft: "8.52rem",
            paddingRight: "6rem",
            fontSize: "1.13rem",
          }}
        >
          <h1 className="title is-1"></h1>
          {documentToReactComponents(
            entry.fields.content,
            defaultRenderOptions
          )}
        </div>
      );
  }
};

export default ContentSection;
