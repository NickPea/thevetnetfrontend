import React from "react";
import { Paper } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import SaveIcon from "@material-ui/icons/SaveOutlined";
import HouseIcon from "@material-ui/icons/HouseOutlined";
import Car from "@material-ui/icons/DriveEtaOutlined";
import NewGraduateIcon from "@material-ui/icons/SchoolOutlined";
import FlightIcon from "@material-ui/icons/FlightOutlined";
import WorldIcon from "@material-ui/icons/PublicOutlined";

export default function JobItem(props) {
  return (
    <>
      <Paper elevation={3} square style={{ padding: "5px 20px" }}>
        <Row>
          <Col lg={2} md={4} style={{ borderRight: "1px black solid" }}>
            <div>{props.location}</div>
            <div>
              <small>{props.businessName}</small>
            </div>
            <img src={props.businessLogo} alt="" style={{ width: "100px" }} />
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
                  <Col>
                    <Perks perks={props.perks} />
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

const Perks = props => (
  <span>
    {props.perks.includes("newgrad") && (
      <span title="accepting new graduates">
        <NewGraduateIcon />
      </span>
    )}{" "}
    {props.perks.includes("overseas") && (
      <span title="overseas candidates accepted">
        <WorldIcon />
      </span>
    )}{" "}
    {props.perks.includes("accomodation") && (
      <i title="accomodation provided">
        <HouseIcon />
      </i>
    )}{" "}
    {props.perks.includes("car") && (
      <span title="vehicle provided">
        <Car />
      </span>
    )}{" "}
    {props.perks.includes("flight") && (
      <span title="flight costs covered/reimbursed">
        <FlightIcon />
      </span>
    )}{" "}
  </span>
);
