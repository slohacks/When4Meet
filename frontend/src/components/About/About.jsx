/* eslint-disable */
import React from 'react';
import './About.css';

export default (props) => {
  console.log('Rendering About');

  return (
    <div>
      <h1>About Page</h1>
      <p id="about">When4Meet is an application inspired by the popular survey tool, When2Meet. 
        When4Meet's goal is to help users and large groups of people find common areas of
        free time where meetings can occur. The team behind this app highly values the 
        easy readability and design of this application. React, Node, Express, MySQL, and 
        Redux was used in the development of this site.</p>
      <p id="developers">When4Meet was created by: Justin Poist, Shriya Nimmagadda, Cole Perry, Jack Fales, and Tyra Krivonak</p>
    </div>

  );
};
