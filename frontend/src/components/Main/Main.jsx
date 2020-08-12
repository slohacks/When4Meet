/* eslint-disable react/prefer-stateless-function, react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Main.css';
// Styles for react-date-range
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {
  OneTimeMeeting,
  About,
  ReoccuringMeeting,
  AvailabilityPage,
  NotFoundPage,
  Availability,
} from '../components';

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/" className="nav-branding">
            When4Meet
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div className="card-container">
                <ReoccuringMeeting />
                <OneTimeMeeting />
              </div>
            )}
          />
          <Route path="/meeting/:id" render={() => <AvailabilityPage {...this.props} />} />
          <Route path="/about" render={() => <About />} />
          <Route path="*" render={() => <NotFoundPage />} />
        </Switch>
      </div>
    );
  }
}

export default Main;
