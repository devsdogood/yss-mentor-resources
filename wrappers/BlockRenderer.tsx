import React from "react";
import {
  ContentTypes,
  IPageFieldsItem,
  IPageItemFieldsItem,
  isIPage,
  isIPageFieldsItem,
} from "../@types/contentTypes";
import { IContentSection, IPage } from "../@types/generated/contentful";
import ContentSection from "../components/ContentSection";

type BlockRendererProps = {
  block: IPage | IPageFieldsItem | IPageItemFieldsItem;
};

const BlockRenderer: React.FC<BlockRendererProps> = ({ block }) => {
  let children: JSX.Element[] = [];

  if (isIPage(block)) {
    // Render all page elements through BlockRenderer
    return (
      <>
        {block.fields.content.map((content) => (
          <BlockRenderer block={content} />
        ))}
      </>
    );
  }

  if (isIPageFieldsItem(block)) {
    children = block.fields.content.map((content) => (
      <BlockRenderer block={content} />
    ));
  }

  const contentTypeId = block.sys.contentType.sys.id;
  const Component = ContentTypeMap[contentTypeId];

  if (!Component) {
    console.warn(`${contentTypeId} can not be handled`);
    return null;
  }

  const { id } = block.sys;

  return (
    <Component key={`${contentTypeId}-${id}`} entry={block as IContentSection}>
      {children}
    </Component>
  );
};

const ContentTypeMap = {
  [ContentTypes.Announcement]: null,
  [ContentTypes.AnnouncementCollection]: null,
  [ContentTypes.ContentSection]: ContentSection,
  [ContentTypes.Event]: null,
  [ContentTypes.EventCalendar]: null,
  [ContentTypes.ExternalResource]: null,
  [ContentTypes.Facilitator]: null,
  [ContentTypes.FacilitatorCollection]: null,
  [ContentTypes.NavigationItem]: null,
  [ContentTypes.NavigationMenu]: null,
  [ContentTypes.Newsletter]: null,
  [ContentTypes.Resource]: null,
  [ContentTypes.ResourceCollection]: null,
};

export default BlockRenderer;
