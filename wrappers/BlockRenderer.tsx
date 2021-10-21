import React from "react";
import {
  ContentTypes,
  IPageFieldsItem,
  IPageItemFieldsItem,
  isIPage,
  isIPageFieldsItem,
} from "../@types/contentTypes";
import { IPage } from "../@types/generated/contentful";
import Announcement from "../components/Announcement";
import ContentSection from "../components/ContentSection";
import Event from "../components/Event";
import ExternalResource from "../components/ExternalResource";
import Facilitator from "../components/Facilitator";
import Newsletter from "../components/Newsletter";
import Resource from "../components/Resource";
import AnnouncementCollection from "./AnnouncementCollection";
import EventCalendar from "./EventCalendar";
import FacilitatorCollection from "./FacilitatorCollection";
import NewsletterCollection from "./NewsletterWrapper";
import ResourceCollection from "./ResourceCollection";

type BlockRendererProps = {
  block: IPage | IPageFieldsItem | IPageItemFieldsItem;
};

const BlockRenderer: React.FC<BlockRendererProps> = ({ block }) => {
  let children: JSX.Element[] = [];

  const getKey = (content: BlockRendererProps['block']) => `${content.sys.contentType}-${content.sys.id}`;

  if (isIPage(block)) {
    // Render all page elements through BlockRenderer
    return (
      <>
        {block.fields.content.map((content) => (
          <BlockRenderer key={getKey(content)} block={content} />
        ))}
      </>
    );
  }

  if (isIPageFieldsItem(block)) {
    children = block.fields.content.map((content) => (
      <BlockRenderer key={getKey(content)} block={content} />
    ));
  }

  const contentTypeId = block.sys.contentType.sys.id;
  const Component = ContentTypeMap[contentTypeId];

  if (!Component) {
    console.warn(`${contentTypeId} can not be handled`);
    return null;
  }

  return (
    // @ts-ignore while we don't have all content types mapped to a component
    <Component key={getKey(block)} entry={block}>
      {children}
    </Component>
  );
};

const ContentTypeMap = {
  [ContentTypes.Announcement]: Announcement,
  [ContentTypes.AnnouncementCollection]: AnnouncementCollection,
  [ContentTypes.ContentSection]: ContentSection,
  [ContentTypes.Event]: Event,
  [ContentTypes.EventCalendar]: EventCalendar,
  [ContentTypes.ExternalResource]: ExternalResource,
  [ContentTypes.Facilitator]: Facilitator,
  [ContentTypes.FacilitatorCollection]: FacilitatorCollection,
  [ContentTypes.NavigationItem]: null,
  [ContentTypes.NavigationMenu]: null,
  [ContentTypes.Newsletter]: Newsletter,
  [ContentTypes.NewsletterCollection]: NewsletterCollection,
  [ContentTypes.Resource]: Resource,
  [ContentTypes.ResourceCollection]: ResourceCollection,
};

export default BlockRenderer;
