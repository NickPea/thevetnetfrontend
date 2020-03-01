import React from "react";
import { Row, Col } from "react-bootstrap";
import { Paper } from "@material-ui/core";
import cssModule from "./ProfileListingBrief.module.css";
import Cindy from "../Assets/vetstaff.jpg";

export default function JobListingBrief() {
  return (
    <>
      <Paper className={cssModule.jobListingBrief}>
        <Row>
          <Col>
            <small style={{ display: "block" }}>
              Small Animal Veterinarian - Locum
            </small>
            <h5 style={{ display: "inline-block" }}>Cindy Ranger</h5>
            <h6 style={{ display: "inline-block" }}>- BVSc</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>
              <b>Status: unemployed</b>
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <small>Need money now, gotta feed my kids.</small>
          </Col>
        </Row>
        <img src={Cindy} alt="staff member" />
      </Paper>
    </>
  );
}
