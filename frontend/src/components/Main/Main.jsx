/* eslint-disable */
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
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
} from "../components";

class Main extends Component {
  render() {
    return (
      // to do: figure out styling to align to right
      <div>
        <nav class="navbar navbar-light bg-light justify-content-between">
          <a class="navbar-brand" href="/">
            <h4>When4Meet</h4>
          </a>
          <a href="/about" className="nav-item mr-sm-2">About</a>
          <a href="/about" className="nav-item ">Another Link</a>
        </nav>

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
