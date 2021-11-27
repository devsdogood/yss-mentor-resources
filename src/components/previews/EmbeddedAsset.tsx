import { Block, Inline } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";

type EmbeddedAssetProps = {
  entry: Block | Inline;
  width?: number;
};

const EmbeddedAsset: React.FC<EmbeddedAssetProps> = ({ entry, width }) => {
  // If the asset is an image
  if (entry.data.target.fields.file.details.image) {
    let { height: imageHeight, width: imageWidth } =
      entry.data.target.fields.file.details.image;

    // Scale height
    if (width) {
      imageHeight = (imageHeight / imageWidth) * width;
      imageWidth = width;
    }

    return (
      <div>
        <Image
          src={`https://${entry.data.target.fields.file.url}`}
          height={imageHeight}
          width={imageWidth}
          objectFit="contain"
        />
      </div>
    );
  }

  // For non-images just render a link to the asset
  return (
    <Link href={`https://${entry.data.target.fields.file.url}`} passHref>
        <a className="styled-link">{entry.data.target.fields.title}</a>
    </Link>
  );
};

export default EmbeddedAsset;
