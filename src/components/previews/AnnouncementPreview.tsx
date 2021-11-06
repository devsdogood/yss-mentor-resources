import Link from "next/link";
import { IAnnouncement } from "@src/types/generated/contentful";

type AnnouncementPreviewProps = {
  entry: IAnnouncement;
};

const AnnouncementPreview: React.FC<AnnouncementPreviewProps> = ({ entry }) => {
  return (
    <Link href={`/announcements/${entry.fields.slug}`}>
      <div className="mb-4 card selectable">
        <header className="card-header bg-contrast-yss-core">
          <p className="card-header-title">
            <a className="is-size-5" style={{ color: "white" }}>
              {entry.fields.title}
            </a>
          </p>
        </header>
        <div className="card-content p-1.25 card-border-contrast-yss-core">
          <div className="content">
            <p>Description: {entry.fields.description}</p>
            {entry.metadata.tags.keys.length > 0
              ? "<p>" + entry.metadata.tags.join(" ") + "</p>"
              : null}

            <p>
              <time dateTime="${entry.sys.createdAt}">
                Created Date:{" "}
                {new Date(entry.sys.createdAt).toLocaleDateString()}
              </time>
            </p>

            {/* Show the updated on date ONLY if its different than the creation date.*/}
            {entry.sys.updatedAt != entry.sys.createdAt
              ? "<p><time dateTime=" +
                entry.sys.updatedAt +
                ">Updated Date: " +
                new Date(entry.sys.updatedAt).toLocaleDateString() +
                "</time></p>"
              : null}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AnnouncementPreview;
