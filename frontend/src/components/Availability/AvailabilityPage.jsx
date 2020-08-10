/* eslint-disable react/prop-types, react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import {
  NameModal, Availability, Selector, Viewer,
} from '../components';
import './Availability.css';

export default (props) => {
  console.log('Rendering Availability Page');

  const { location } = props;
  const meetingId = location.pathname.split('/')[2];

  useEffect(() => {
    props.updateMeeting(meetingId);
    props.updateAvailability(meetingId);
  }, []);

  const name = useSelector((state) => state.Availability);
  const meeting = useSelector((state) => state.Meeting);

  console.log('Availability Object: ', name);

  return (
    <div>
      <h3 className="meeting-title">
        {_.get(meeting, ['selectedMeeting', 'name'], '')}
      </h3>
      <div className="card-container">
        <Availability
          title="Mark your Availability"
          subtitle="Click on the times you are available"
          component={<Selector meetingId={meetingId} />}
          btn={false}
          name={name}
          {...props}
        />
        <Availability
          title="Team Availability"
          subtitle="Mouse over to see who is available"
          component={<Viewer />}
          btn={false}
          {...props}
        />
      </div>

      <NameModal {...props} />
    </div>

  );
};
