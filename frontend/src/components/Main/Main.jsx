/* eslint-disable */
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import {
  Navbar, Nav, Row, Col,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Main.css';
// Styles for react-date-range
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {
  OneTimeMeeting, About, ReoccuringMeeting, NameModal,
} from '../components';

class Main extends Component {
  render() {
    return (
      <div>

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <ReoccuringMeeting />
                <OneTimeMeeting />
              </div>
            )}
          />
          <Route path="/meeting/:id" render={() => <NameModal />} />
          <Route path="/about" render={() => <About />} />
        </Switch>

      </div>
    );
  }
}

export default Main;
