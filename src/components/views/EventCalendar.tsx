import { IEvent, IEventCalendar } from "@src/types/generated/contentful";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type EventCalendarProps = {
  entry: IEventCalendar;
};

const EventCalendar: React.FC<EventCalendarProps> = ({ entry }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<IEvent[]>();

  useEffect(() => {
    setEvents(
      entry.fields.content?.filter((calEvent) =>
        eventOccursOnDay(
          selectedDate,
          new Date(calEvent.fields.start),
          new Date(calEvent.fields.end)
        )
      )
    );
  }, [selectedDate]);
  return (
    <div className="container">
      <div className="my-5">
        <Calendar
          locale="en-US"
          minDetail="month"
          value={selectedDate}
          onClickDay={setSelectedDate}
          tileContent={({ date }) => {
            const hasEvents = !!entry.fields.content?.filter((calEvent) =>
              eventOccursOnDay(
                date,
                new Date(calEvent.fields.start),
                new Date(calEvent.fields.end)
              )
            ).length;
            return hasEvents ? <p>&bull;</p> : <p>&nbsp;</p>;
          }}
        />
      </div>
      {events?.map(toEventCard)}
    </div>
  );
};

function toEventCard(calEvent: IEvent, idx: number): JSX.Element {
  return (
    <div
      className="card"
      key={idx}
      style={{ width: "80%", maxWidth: "500px", margin: "0 auto 1rem auto" }}
    >
      <header className="card-header">
        <p className="card-header-title">{calEvent.fields.title}</p>
      </header>
      <div className="card-content">
        <div className="content">
          <p>{calEvent.fields.description}</p>
          <p>
            <strong>Event Start: </strong>
            <time dateTime={calEvent.fields.start}>
              {new Date(calEvent.fields.start).toLocaleString()}
            </time>
          </p>
          <p>
            <strong>Event End: </strong>
            <time dateTime={calEvent.fields.end}>
              {new Date(calEvent.fields.end).toLocaleString()}
            </time>
          </p>
        </div>
      </div>
    </div>
  );
}

function eventOccursOnDay(
  date: Date,
  eventStart: Date,
  eventEnd: Date
): boolean {
  const selectedStartOfDay = new Date(date.getTime());
  selectedStartOfDay.setHours(0);

  const selectedEndOfDay = new Date(date.getTime());
  selectedEndOfDay.setHours(23);
  selectedEndOfDay.setMinutes(59);

  return eventStart <= selectedEndOfDay && selectedStartOfDay <= eventEnd;
}

export default EventCalendar;
