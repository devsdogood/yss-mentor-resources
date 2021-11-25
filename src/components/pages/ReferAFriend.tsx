import ReferAFriendForm from "@components/forms/ReferAFriendForm";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IContentSection } from "@src/types/generated/contentful";
import { defaultRenderOptions } from "@utils/render-options";

type ContentSectionProps = { entry: IContentSection };

const ReferAFriend: React.FC<ContentSectionProps> = ({ entry }) => {
  return (
    <div
      className="container is-fluid"
      style={{
        fontSize: "1.56rem",
      }}
    >
      <div className="columns is-centered">
        <div className="column is-10">
          {documentToReactComponents(entry.fields.content, defaultRenderOptions)}
          <ReferAFriendForm />
        </div>
      </div>
    </div>
  );
};

export default ReferAFriend;
