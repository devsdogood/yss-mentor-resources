import { Entry } from "contentful";
import { IContentSection, IPage, IPageFields } from "./generated/contentful";

/**
 * `contentful-typescript-codegen` doesn't generate an enum of content types
 * so we do it manually here. Github issue at:
 * https://github.com/intercom/contentful-typescript-codegen/issues/54
 */
export enum ContentTypes {
    Announcement = 'announcement',
    AnnouncementCollection = 'announcementCollection',
    ContentSection = 'contentSection',
    Event = 'event',
    EventCalendar = 'eventCalendar',
    ExternalResource = 'externalResource',
    Facilitator = 'facilitator',
    FacilitatorCollection = 'facilitatorCollection',
    NavigationItem = 'navigationItem',
    NavigationMenu = 'navigationMenu',
    Newsletter = 'newsletter',
    Page = 'page',
    Resource = 'resource',
    ResourceCollection = 'resourceCollection',
};

/** Get the fields from an array-like entry */
type IEntryFieldsItem<T extends Entry<IPageFields | IPageFieldsItem['fields']>> = T['fields']['content'][number];

/** Top-level collections on the page (announcement collection, event calendar, etc). `IContentSection` is excluded since it isn't a collection. */
export type IPageFieldsItem = Exclude<IEntryFieldsItem<IPage>, IContentSection>;

/** Child items on the page (content section, announcement, etc).*/
export type IPageItemFieldsItem = IEntryFieldsItem<IPageFieldsItem> | IContentSection;

export const isIPage = (block: IPage | IPageFieldsItem | IPageItemFieldsItem): block is IPage => (block as IPage).sys.contentType.sys.id === 'page';

export const isIPageFieldsItem = (block: IPageFieldsItem | IPageItemFieldsItem): block is IPageFieldsItem => Array.isArray((block as IPageFieldsItem).fields.content);
