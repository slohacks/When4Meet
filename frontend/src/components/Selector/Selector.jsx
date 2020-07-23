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
  
  // making array of times
  const startT = moment(startTime, "hh:mm A");
  const endT = moment(endTime, "hh:mm A");
  const hours = [];

  hours.push(startT.format("hh:mm A"));

  while (startT.format("hh:mm A") !== endT.format("hh:mm A")){
    startT.add(30, 'minutes');
    hours.push(startT.format("hh:mm A"));
    
  }

  const Mon = 'Mon';
  const Tue = 'Tue';
  const Wed = 'Wed';
  const Thu = 'Thu';
  const Fri = 'Fri';
  const Sat = 'Sat';
  const Sun = 'Sun';

  const [count, setCount] = useState(0);

  const [dayStates, setDayStates] = useState({
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
    Sun: false,
  });

  // const cellList = days.map(  
  //   function(day, index) {
  //     console.log(day);
  //     console.log(index);
  //     return []
  
  //   }
  // );

  const [cellState, setCellState] = useState ({
    cellList : days.map(  
      function(day, index) {
        console.log(day);
        console.log(index);
        return []
    
      }
    )
  });

  
  const onCellSelection = (dayIndex, time) => {
    console.log(dayIndex);
    console.log(time);
    // console.log(cellState);
    //check if time is already there or not 
    cellState.cellList[dayIndex].push(time)
    setCellState({cellList: cellState.cellList})  
    
  };
  console.log(cellState);

  

  return (


    <div className="selector-content">
      {hours.map((time) => (
        <Row>
          <div className="time-label">{time}</div>
          {days.map(
            
            function(day, index){             
              return (
              <div
                onClick={() => onCellSelection(index, time)}
                role="button"
                tabIndex={0}
                aria-label={day}
                className={cellState.cellList[index].includes(time) ? 'cell cell-enabled' : ' cell cell-disabled'}
              />
              )
            }
          )}

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
