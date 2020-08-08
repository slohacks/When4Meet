import React from 'react';
import { Link } from 'react-router-dom';
import './404.css';

export default () => (
  <div className="not-found-container">
    <h1>Uh oh! Page Not Found</h1>
    <Link to="/">Back to Our site</Link>
  </div>
);
