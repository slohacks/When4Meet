import React from "react";
import Popup from "reactjs-popup";
import { Form, Row } from "react-bootstrap";

export default () => {
  console.log(`Rendering Viewer`);

  // information that would come from an incoming json object
  const meetingName = "SLO Hacks General Meeting";
  const startTime = "9:00am";
  const endTime = "5:00pm";
  const timezone = "PST";
  const isReoccuring = true;
  const days = ["Mon", "Wed", "Fri", "Sat", "sat", "3", "5"];
  const times = [
    "9:00am",
    "9:30am",
    "10:00am",
    "10:30am",
    "11:00am",
    "11:30am",
    "10:30am",
    "11:00am",
    "11:30am",
    "11:00am",
    "11:30am",
    "10:30am",
    "11:00am",
    "11:30am",
    "11:00am",
    "11:30am",
  ];
  const name = "JP";
  const selectedTimes = [
    ["9:00am", "9:30am"],
    ["10:00am", "10:30am"],
    ["11:00am", "11:30am"],
  ];

  return (
    <div>
      {/* iterate through an array of n possible times to create n rows corresponding to the times in the array. */}
      {times.map((time) => (
        <Row>
          {/* create a time label that declares the times each row corresponds to */}
          <div className="time-label">{time}</div>
          {/* iterate through an array of n days given by an incoming json object to create a grid of buttons */}
          {days.map((day) => (
            // create a popup for every button that displays information
            // corresponding to who can attend a such meeting at the time given
            // by an aformentioned label.
            <Popup
              trigger={
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={day}
                  className="cell cell-disabled"
                />
              }
              position="left center"
              on="hover"
            >
              {name}
            </Popup>
          ))}
        </Row>
      ))}
      {/* create a row that displays labels on the "x axis" of the grid. */}
      <Row>
        <div className="time-label"> {}</div>
        {days.map((dayname) => (
          <div className="daylabel">{dayname}</div>
        ))}
      </Row>
    </div>
  );
};
