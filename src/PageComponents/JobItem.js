import React from "react";
import { Paper } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import SaveIcon from "@material-ui/icons/SaveOutlined";
import JobBadges from "../PageComponents/JobBadges";

export default function JobItem(props) {
  return (
    <>
      <Paper elevation={3} square style={{ padding: "5px 20px" }}>
        <Row>
          <Col
            lg={2}
            md={4}
            style={{ borderRight: "1px black solid", textAlign: "center" }}>
            <div>{props.location}</div>
            <div>
              <small>{props.businessName}</small>
            </div>
            <img
              src={props.businessLogo}
              alt=""
              style={{ width: "100px", margin: "auto" }}
            />
          </Col>
          <Col>
            <Row>
              <Col>
                <small>{props.industryType}</small>
                <h5>
                  {props.position} - {props.employType}
                </h5>
                <Row>
                  <Col lg={2}> {props.pay && <b>{props.pay}</b>} </Col>
                </Row>
                <Row>
                  <Col>
                    <JobBadges badgeCodeArray={props.badgeCodeArray} />
                  </Col>
                </Row>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <div>
                  <SaveIcon />
                </div>
                {props.datePosted}
              </Col>
            </Row>
            <br />
            <Row>
              <Col style={{ color: "grey" }}>{props.shortDescription}</Col>
            </Row>
          </Col>
        </Row>
      </Paper>
    </>
  );
}
