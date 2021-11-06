import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IEventCalendar } from "@src/types/generated/contentful";
import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';

function MyCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

type CalendarProps = { entry: IEventCalendar };

const CalendarSection: React.FC<CalendarProps> = ({ entry }: CalendarProps) => (
  <>
    <b>Calendar is gonna be here</b>
    { MyCalendar() }
  </>
);


export default CalendarSection;