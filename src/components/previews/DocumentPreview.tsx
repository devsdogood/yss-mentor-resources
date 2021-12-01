import { Asset } from "contentful";
import { Document, Page } from "react-pdf";
import Image from "next/image";

type DocumentPreviewProps = {
  entry: Asset;
};

const PlaceholderImage = () => (
  <Image src="/file-placeholder.svg" width={350} height={350} />
);

const DocumentPreview: React.FC<DocumentPreviewProps> = ({ entry }) => {
  return (
    <div className="column is-narrow" style={{ width: "400px" }}>
      <a
        href={`https:${entry.fields.file.url}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="card">
          <div className="card-image">
            <Document file={entry.fields.file.url} loading={<PlaceholderImage />}>
              <div
                style={{
                  maxHeight: "400px",
                  overflowY: "hidden",
                  userSelect: "none",
                }}
              >
                <Page width={350} pageNumber={1} />
              </div>
            </Document>
          </div>
          <div className="card-content">
            <a className="styled-link">{entry.fields.title}</a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default DocumentPreview;
