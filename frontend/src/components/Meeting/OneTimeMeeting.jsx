import React, { useState } from 'react';
import { DateRange } from 'react-date-range';

export default () => {
  console.log('Rendering OneTimeMeeting');
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  return (
    <div style={{ border: '2px solid black', padding: '20px', width: '35%' }}>
      <h2>One-Time Meeting </h2>
      <form>
        <span> Meeting Title</span>
        <input
          className="input-group mt-1 mb-2"
          style={{ width: '100%' }}
          placeholder="Meeting Title"
        />
        <span>
          <span> Start </span>
          <input
            className="ml-1 mr-3"
            style={{ width: '35%' }}
            placeholder="9:00 am"
          />
          <span> End </span>
          <input
            className="ml-1"
            style={{ width: '35%' }}
            placeholder="5:00 pm"
          />
        </span>
        <center>
          <p className="mt-2">
            Select the potential dates for yout meeting
          </p>
          <DateRange
            editableDateInputs
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
        </center>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={console.log('Submitted')}
        >
          Create Event
        </button>

      </form>
    </div>

  );
};
