import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IEventCalendar } from "@src/types/generated/contentful";
import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import Link from "next/Link";

type CalendarProps = { entry: IEventCalendar };

const CalendarSection: React.FC<CalendarProps> = ({ entry }: CalendarProps) => (
  <>
    <a href="/events">
        <span className="yss-color-core selectable is-underlined is-size-5">
          <span className="icon">
            <ion-icon name="heart"></ion-icon>
          </span>
          Announcements
        </span>
      </a>
      <div className="box">
        <h1 className="title">{entry.fields.content}</h1>
        <h5 className="subtitle">Published at: {(new Date(entry.sys.updatedAt)).toLocaleString()}</h5>
      </div>
  </>
);


export default CalendarSection;