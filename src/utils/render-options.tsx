import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import Link from "next/link";

export const defaultRenderOptions: Options = {
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
      [INLINES.HYPERLINK]: ({ data }, children) => (
        <Link href={data.uri} passHref>
          <a className="styled-link">{children}</a>
        </Link>
      ),
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
