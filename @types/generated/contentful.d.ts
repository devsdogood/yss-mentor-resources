// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IAnnouncementFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Published */
  published?: string | undefined;

  /** Description */
  description?: string | undefined;

  /** Content */
  content: Document;
}

/** An announcement to be displayed on your site. */

export interface IAnnouncement extends Entry<IAnnouncementFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "announcement";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IAnnouncementCollectionFields {
  /** Use most recent */
  useMostRecent: boolean;

  /** Limit */
  limit?: number | undefined;

  /** Announcements */
  announcements?: IAnnouncement[] | undefined;
}

/** A collection of announcements to display on your site. You can choose to display either the most recent announcements or a collection of announcements of your choice. */

export interface IAnnouncementCollection
  extends Entry<IAnnouncementCollectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "announcementCollection";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IContentSectionFields {
  /** Content */
  content?: Document | undefined;
}

/** A content section to display on your site. This can contain text formatting, images, links, etc. */

export interface IContentSection extends Entry<IContentSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "contentSection";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IEventFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Description */
  description?: string | undefined;

  /** Start */
  start: string;

  /** End */
  end: string;
}

/** An event to be displayed on an event calendar. */

export interface IEvent extends Entry<IEventFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "event";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IEventCalendarFields {
  /** Use most recent */
  useMostRecent: boolean;

  /** Limit */
  limit?: number | undefined;

  /** Events */
  events?: IEvent[] | undefined;
}

/** A calendar of events to display on your site. You can choose to display either the most recent events or a collection of events of your choice. */

export interface IEventCalendar extends Entry<IEventCalendarFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "eventCalendar";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IExternalResourceFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Resource Link */
  resourceLink: string;
}

/** A training or resource from an external source (YouTube video, PDF, etc). */

export interface IExternalResource extends Entry<IExternalResourceFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "externalResource";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IFacilitatorFields {
  /** Image */
  image: Asset;

  /** Name */
  name: string;

  /** District */
  district?: string | undefined;

  /** Contact Information */
  contactInformation?: Document | undefined;
}

/** The name, photo, district, and contact information for a facilitator. */

export interface IFacilitator extends Entry<IFacilitatorFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "facilitator";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IFacilitatorCollectionFields {
  /** Use most recent */
  useMostRecent: boolean;

  /** Limit */
  limit?: number | undefined;

  /** Facilitators */
  facilitators?: IFacilitator[] | undefined;
}

/** A collection of facilitators to display on your site. You can choose to display either the most recent facilitators or a collection of facilitators of your choice. */

export interface IFacilitatorCollection
  extends Entry<IFacilitatorCollectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "facilitatorCollection";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface INavigationItemFields {
  /** Title */
  title?: string | undefined;

  /** Page */
  page?: IAnnouncement | IPage | undefined;

  /** External URL */
  externalUrl?: string | undefined;
}

/** An item to display in your navigation menu (about page, blog page, etc). */

export interface INavigationItem extends Entry<INavigationItemFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "navigationItem";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface INavigationMenuFields {
  /** Menu Items */
  menuItems?: INavigationItem[] | undefined;
}

/** The navigation menu to appear at the top of your site. Add links to pages within your site or links to an external site (donation page, social media page, etc). */

export interface INavigationMenu extends Entry<INavigationMenuFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "navigationMenu";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface INewsletterFields {
  /** Title */
  title: string;

  /** Slug */
  slug?: string | undefined;

  /** Published */
  published?: string | undefined;

  /** Description */
  description?: string | undefined;

  /** Newsletter File */
  newsletterFile: Asset;
}

/** A newsletter to be displayed on your site. */

export interface INewsletter extends Entry<INewsletterFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "newsletter";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageFields {
  /** Slug */
  slug: string;

  /** Description */
  description?: string | undefined;

  /** Title */
  title: string;

  /** Content */
  content?:
    | (
        | IAnnouncementCollection
        | IContentSection
        | IEventCalendar
        | IFacilitatorCollection
        | IResourceCollection
      )[]
    | undefined;
}

/** A page to be accessible on your website */

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "page";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IResourceFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Content */
  content: Document;
}

/** A training or resource with custom content. */

export interface IResource extends Entry<IResourceFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "resource";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IResourceCollectionFields {
  /** Use most recent */
  useMostRecent: boolean;

  /** Limit */
  limit?: number | undefined;

  /** Resources */
  resources?: (IExternalResource | IResource)[] | undefined;
}

/** A collection of resources to display on your site. You can choose to display either the most recent resources or a collection of resources of your choice. */

export interface IResourceCollection extends Entry<IResourceCollectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "resourceCollection";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "announcement"
  | "announcementCollection"
  | "contentSection"
  | "event"
  | "eventCalendar"
  | "externalResource"
  | "facilitator"
  | "facilitatorCollection"
  | "navigationItem"
  | "navigationMenu"
  | "newsletter"
  | "page"
  | "resource"
  | "resourceCollection";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
