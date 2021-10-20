/*
contentful-typescript-codegen can't generate an enum of content types
so we do it manually here

https://github.com/intercom/contentful-typescript-codegen/issues/54
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
