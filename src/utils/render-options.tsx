import EmbeddedAsset from "@components/previews/EmbeddedAsset";
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
      // TODO: Remove hardcoded width for embedded images
      [BLOCKS.EMBEDDED_ASSET]: (node) => <EmbeddedAsset entry={node} width={200} />,
    },
};
