import React, { useState } from 'react';
import {
  Button, Col, Row, Form,
} from 'react-bootstrap';
import './Selector.css';
import './Meeting.css';
import { START_OPTIONS, END_OPTIONS } from './MeetingConstants';

export default () => {
  console.log('Rendering AvailabilitySelector');

  var moment = require('moment'); // require
  moment().format(); 

  const name = 'SLO Hacks General Meeting';
  const startTime = '5:00am';
  const endTime = '12:30pm';
  const timezone = 'PST';
  const isReoccuring = true;
  const days = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
  
  var startmil = moment(startTime, "hh:mm A").format("HH:mm");
  var startt = moment(startmil, "HH:mm");

  var endmil = moment(endTime, "hh:mm A").format("HH:mm");
  var endt = moment(endmil, "HH:mm");

  
  const hours = [];
  const duration = (endt.diff(startt, "hours"));
  const endHour = parseInt(duration);
  const startHour = startTime;

  for (let hour = 0; hour < endHour+1; hour++) {
    hours.push(
      moment({ hour })
        .add(startHour, 'hours')
        .format('h:mm A')
    );
    hours.push(
      moment({
        hour,
        minute: 30
      })
        .add(startHour, 'hours')
        .format('h:mm A')
    ); 

  }

  //fix extra time increment 
  // if (hours[hours.length - 1][-2] == endTime){
  //    hours.pop();
  // }
 

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
      {hours.map((time) => (
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
