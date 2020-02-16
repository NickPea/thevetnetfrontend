import React from "react";
import MenuBar from "../PageComponents/MenuBar";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route, NavLink } from "react-router-dom";
//components
import StaffList from "./StaffList";
import JobList from "./JobList";

export default function Entry() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <MenuBar />
          </Col>
        </Row>
        <Row>
          <Col>
            <NavLink to="/jobs">Jobs</NavLink>
          </Col>
          <Col>
            <NavLink to="/staff">Staff</NavLink>
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
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
