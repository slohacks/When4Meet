import React, { useState } from 'react';
import {
  Button, Col, Row, Form,
} from 'react-bootstrap';
import './Selector.css';
import './Meeting.css';
import { START_OPTIONS, END_OPTIONS } from './MeetingConstants';

export default () => {
  console.log('Rendering AvailabilitySelector');

  const name = 'SLO Hacks General Meeting';
  const startTime = '9:00am';
  const endTime = '5:00pm';
  const timezone = 'PST';
  const isReoccuring = true;
  const days = ['Mon', 'Wed', 'Fri', 'Sat', 'sat', '3', '5'];

  for (let i = 0; i < days.length; i++) {

  }

  const times = ['9:00am', '9:30am', '10:00am', '10:30am', '11:00am', '11:30am', '10:30am', '11:00am', '11:30am', '11:00am', '11:30am', '10:30am', '11:00am', '11:30am', '11:00am', '11:30am'];

  const Mon = 'Mon';
  const Tue = 'Tue';
  const Wed = 'Wed';
  const Thu = 'Thu';
  const Fri = 'Fri';
  const Sat = 'Sat';
  const Sun = 'Sun';

  const [dayStates, setDayStates] = useState({
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
    Sun: false,
  });

  const onDaySelection = (day) => {
    switch (day) {
      case (Mon):
        setDayStates({ ...dayStates, Mon: !(dayStates.Mon) });
        break;
      case (Tue):
        setDayStates({ ...dayStates, Tue: !(dayStates.Tue) });
        break;
      case (Wed):
        setDayStates({ ...dayStates, Wed: !(dayStates.Wed) });
        break;
      case (Thu):
        setDayStates({ ...dayStates, Thu: !(dayStates.Thu) });
        break;
      case (Fri):
        setDayStates({ ...dayStates, Fri: !(dayStates.Fri) });
        break;
      case (Sat):
        setDayStates({ ...dayStates, Sat: !(dayStates.Sat) });
        break;
      case (Sun):
        setDayStates({ ...dayStates, Sun: !(dayStates.Sun) });
        break;
      default:
        break;
    }
  };

  return (

    <div className="selector-content">
      {times.map((time) => (
        <Row>
          <div className="time-label">{time}</div>
          {days.map((day) => (
            <div
              onClick={() => onDaySelection(day)}
              onKeyPress={() => onDaySelection(day)}
              role="button"
              tabIndex={0}
              aria-label={day}
              className={dayStates.Mon ? 'cell cell-enabled' : ' cell cell-disabled'}
            />

          ))}

        </Row>
      ))}
    <Row>
          <div className="time-label"> {}</div>
      {days.map((dayname) => (
        <div className="daylabel">{dayname}</div>
      
    ))}
    
    </Row>
    

    </div>

  );
};
