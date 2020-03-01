import React from "react";
import { Row, Col } from "react-bootstrap";
import cssModule from "./Dashboard.module.css";
//components
import JobListingBrief from "../PageComponents/JobListingBrief";
import ProfileListingBrief from "../PageComponents/ProfileListingBrief";

export default function Dashboard() {
  return (
    <div>
      <Row style={{ marginBottom: "20px" }}>
        <Col>
          <div style={{ fontWeight: "bold" }}>
            <h6>Welcome</h6>
            <h3 style={{ textIndent: "15px" }}>Cindy</h3>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={cssModule.applicationPanel}>
            <h3 style={{ textAlign: "center", color: "white" }}>
              Applications and Offers
            </h3>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={cssModule.staffPanel}>
            <h3 style={{ textAlign: "center", color: "whitesmoke" }}>
              Manage Your Profiles
            </h3>
            <br />
            <ProfileListingBrief />
          </div>
        </Col>
        <Col>
          <div className={cssModule.workerPanel}>
            <h3 style={{ textAlign: "center", color: "whitesmoke" }}>
              Manage Your Adverts
            </h3>
            <br />
            <JobListingBrief />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={cssModule.userPanel}>
            <h3 style={{ textAlign: "center", color: "white" }}>
              User Info & Activity
            </h3>
          </div>
        </Col>
      </Row>
    </div>
  );
}
