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
  NameModal,
} from '../components';

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand
            href="/"
            style={{ fontWeight: 500, fontSize: '20px', lineHeight: '17px' }}
          >
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
