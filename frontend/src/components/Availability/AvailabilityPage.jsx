/* eslint-disable react/prop-types, react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { NameModal, Availability, About } from '../components';
import './Availability.css';

export default (props) => {
  console.log('Rendering Availability Page');

  useEffect(() => {
    const { location } = props;
    const meetingId = location.pathname.split('/')[2];
    props.updateMeeting(meetingId);
  }, []);

  const name = useSelector((state) => state.Availability);
  const meeting = useSelector((state) => state.Meeting);

  return (
    <div>
      <h3 className="meeting-title">
        {_.get(meeting, ['selectedMeeting', 'name'], '')}
      </h3>
      <div className="card-container">
        <Availability
          title="Mark your Availability"
          subtitle="Click on the times you are availible"
          component={<About />}
          btn
          name={name}
          {...props}
        />
        <Availability
          title="Team Availability"
          subtitle="Mouse over to see who is availible"
          component={<About />}
          btn={false}
          name={name}
          {...props}
        />
      </div>

      <NameModal {...props} />
    </div>

  );
};