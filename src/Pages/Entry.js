import React from "react";
import MenuBar from "../PageComponents/MenuBar";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route, NavLink } from "react-router-dom";
//components
import StaffList from "./StaffList";
import JobList from "./JobList";
import ProviderProfile from "./ProviderProfile";
import StaffProfile from "./StaffProfile";

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
            <NavLink to="/staff">Staff Listings</NavLink>
          </Col>
          <Col>
            <NavLink to="/providerprofile">Provider Profile</NavLink>
          </Col>
          <Col>
            <NavLink to="/staffprofile">Staff Profile</NavLink>
          </Col>
        </Row>
        <Row>
          <Col>
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
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
