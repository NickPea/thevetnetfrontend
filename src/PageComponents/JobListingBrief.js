import React from "react";
import { Row, Col } from "react-bootstrap";
import { Paper } from "@material-ui/core";
import cssModule from "./JobListingBrief.module.css";
import gcLogo from "../Assets/greencross.jfif";

export default function JobListingBrief() {
  return (
    <>
      <Paper className={cssModule.jobListingBrief}>
        <Row>
          <Col>
            <small style={{ display: "block" }}> Small Animal Practice</small>
            <h5 style={{ display: "inline-block" }}>Veterinarian </h5>
            <h6 style={{ display: "inline-block" }}>- Locum</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>
              <b>Greencross-AEC: Woolloongabba</b>
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <small>Seeking veterinarian for christmas rush period....</small>
          </Col>
        </Row>
        <img src={gcLogo} alt="advert logo" />
      </Paper>
    </>
  );
}
