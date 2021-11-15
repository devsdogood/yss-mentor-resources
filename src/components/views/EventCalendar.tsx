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
    const selectedStartOfDay = new Date(selectedDate.getTime());
    selectedStartOfDay.setHours(0);
    const selectedEndOfDay = new Date(selectedDate.getTime());
    selectedEndOfDay.setHours(23);
    selectedEndOfDay.setMinutes(59);
    function isOnSelectedDay(date: Date): boolean {
      return selectedStartOfDay <= date && date <= selectedEndOfDay;
    }
    setEvents(
      entry.fields.content?.filter((calEvent) => {
        return (
          isOnSelectedDay(new Date(calEvent.fields.start)) ||
          isOnSelectedDay(new Date(calEvent.fields.end))
        );
      })
    );
  }, [selectedDate]);
  return (
    <div className="container">
      <div className="my-6">
        <Calendar
          locale="en-US"
          minDetail="month"
          value={selectedDate}
          onClickDay={setSelectedDate}
        />
      </div>
      {events?.map((calEvent, idx) => (
        <div
          className="card"
          key={idx}
          style={{ width: "80%", maxWidth: "500px", margin: "1rem auto" }}
        >
          <header className="card-header">
            <p className="card-header-title">{calEvent.fields.title}</p>
          </header>
          {/* <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div> */}
          <div className="card-content">
            <div className="content">
              <p>{calEvent.fields.description}</p>
              <p>
                <strong>Start: </strong>
                <time dateTime={calEvent.fields.start}>
                  {new Date(calEvent.fields.start).toLocaleString()}
                </time>
              </p>
              <p>
                <strong>End: </strong>
                <time dateTime={calEvent.fields.end}>
                  {new Date(calEvent.fields.end).toLocaleString()}
                </time>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCalendar;
