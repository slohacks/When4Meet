/* eslint-disable */
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Main.css";
// Styles for react-date-range
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {
  OneTimeMeeting,
  About,
  ReoccuringMeeting,
  NameModal,
  Availability,
  AvailabilityPage,
  Selector,
  Viewer
} from "../components";

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
          <Route path="/meeting/:id" render={() => <AvailabilityPage {...this.props}/>} />
          <Route path="/temp" render={() => 
              (<div className='card-container'>
                <Availability title='Mark your Availability' 
                subtitle='Click on the times you are availible' 
                component={<Selector/>}
                btn={true}
                {...this.props}/>
                <Availability title='Team Availability' 
                subtitle='Mouse over to see who is availible' 
                component={<About/>}
                btn={false}
                {...this.props}/>
              </div>
            )}
          />
          <Route path="/about" render={() => <About />} />
        </Switch>
      </div>
    );
  }
}

export default Main;
