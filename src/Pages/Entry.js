import React from "react";
import MenuBar from "../PageComponents/MenuBar";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route, NavLink } from "react-router-dom";
//components
import StaffList from "./StaffList";
import JobList from "./JobList";
import ProviderProfile from "./ProviderProfile";
import StaffProfile from "./StaffProfile";
import SignInForm from "../PageComponents/SignInForm";
import SignUpForm from "../PageComponents/SignUpForm";
import Dashboard from "./Dashboard";

export default function Entry() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <MenuBar />
          </Col>
        </Row>
        <Row>
          <Col>
            <NavLink to="/jobs">Job Listings</NavLink>
          </Col>
          <Col>
            <NavLink to="/providerprofile">Provider Profile</NavLink>
          </Col>
          <Col>
            <NavLink to="/staff">Staff Listings</NavLink>
          </Col>
          <Col>
            <NavLink to="/staffprofile">Staff Profile</NavLink>
          </Col>
          <Col>
            <NavLink to="/signin">Sign In</NavLink>
          </Col>
          <Col>
            <NavLink to="/signup">Sign Up</NavLink>
          </Col>
          <Col>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <Switch>
              <Route path="/jobs">
                <JobList />
              </Route>
              <Route path="/staff">
                <StaffList />
              </Route>
              <Route path="/providerprofile">
                <ProviderProfile />
              </Route>
              <Route path="/staffprofile">
                <StaffProfile />
              </Route>
              <Route path="/signin">
                <SignInForm />
              </Route>
              <Route path="/signup">
                <SignUpForm />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
