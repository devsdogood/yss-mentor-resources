import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { IContentSection } from "@src/types/generated/contentful";
import Image from "next/image";

type ContentSectionProps = { entry: IContentSection };

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-5">{children}</p>,
  },
};

const Home: React.FC<ContentSectionProps> = ({ entry }) => {
  return (
    <div
      className="container is-fluid"
      style={{
        fontSize: "1.5rem",
      }}
    >
      <div className="columns is-centered">
        <div className="column is-10">
          <Image src="/home-page-mentoring.jpg" height={345} width={450} />
          <Image src="/home-page-mentoring3.jpg" height={345} width={450} />
          <Image src="/home-page-mentoring2.jpg" height={345} width={450} />

          {documentToReactComponents(entry.fields.content, options)}
        </div>
      </div>
    </div>
  );
};

export default Home;
