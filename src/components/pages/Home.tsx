import {
  documentToReactComponents,
  Options
} from "@contentful/rich-text-react-renderer";
import { IContentSection } from "@src/types/generated/contentful"
import Image from "next/image";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

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

const Home: React.FC<ContentSectionProps> = ({ entry }) => {
  return (
    <div
      className="container"
      style={{
        fontSize: "1.56rem",
      }}
    >
      <div className="columns is-centered">
        <div className="column is-4">
          <Image
            src="/home-page-mentoring.jpg"
            height={345}
            width={450}
            layout="responsive"
          />
        </div>
        <div className="column is-4">
          <Image
            src="/home-page-mentoring3.jpg"
            height={345}
            width={450}
            layout="responsive"
          />
        </div>
        <div className="column is-4">
          <Image
            src="/home-page-mentoring2.jpg"
            height={345}
            width={450}
            layout="responsive"
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

export default Home;
