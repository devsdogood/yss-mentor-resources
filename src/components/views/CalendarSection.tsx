import { IEventCalendar } from "@src/types/generated/contentful";
import Link from "next/link";
import React from "react";
import "react-calendar/dist/Calendar.css";

type CalendarProps = { entry: IEventCalendar };

const CalendarSection: React.FC<CalendarProps> = ({ entry }: CalendarProps) => (
  <>
    <Link href="/events">
      <span className="yss-color-core selectable is-underlined is-size-5">
        <span className="icon">
          <ion-icon name="heart"></ion-icon>
        </span>
        Announcements
      </span>
    </Link>
    <div className="box">
      <h1 className="title">{entry.fields.content}</h1>
      <h5 className="subtitle">
        Published at: {new Date(entry.sys.updatedAt).toLocaleString()}
      </h5>
    </div>
  </>
);

export default CalendarSection;
