import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
const EventCalendar: React.FC = ({ children }) => {
  return (
    <>
      <div className="ml-10">
        <div>
          <h1> <strong> Calendar Page </strong> </h1>
        <Calendar />
        </div>
        <p>
          Events:
        </p>
        <p>
          
      </p>
    
      
      </div>
      
    </>
);
};

export default EventCalendar;
