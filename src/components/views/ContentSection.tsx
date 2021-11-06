import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { IContentSection } from "@src/types/generated/contentful";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import Home from "@components/pages/Home";
import Covid19 from "@components/pages/resources/COVID-19";

type ContentSectionProps = { entry: IContentSection };

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mb-5">{children}</p>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <p>
        <a href={node.data.target.fields.file.url} target="_blank">
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
      return <Home entry={entry}/>
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
          {documentToReactComponents(
            entry.fields.content,
            options
          )}
        </div>
      );
  }
};

export default ContentSection;
