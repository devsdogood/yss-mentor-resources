import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
const EventCalendar: React.FC = ({ children }) => {
  return (
    <>
      <div className="ml-10">
      <div>
        <h1> <b> Calendar Page </b> </h1>
      <Calendar />
      </div>
      <p>
      Events:
      </p>
      <p>
      <span className="icon has-text-info">
      <i className="fas fa-info-circle"></i>
      <span> Info </span>
    </span>
    </p>
    
      Trying to pull the events based on what date was clicked.
      </div>
      <div> <input type="text" />
  </div>
      
    </>
);
};

export default EventCalendar;
