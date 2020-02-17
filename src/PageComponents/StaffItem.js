import React from "react";
import { Paper, Avatar, Tooltip } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import SaveIcon from "@material-ui/icons/SaveOutlined";
import StaffBadges from "../PageComponents/StaffBadges";

export default function StaffItem(props) {
  return (
    <>
      <Paper elevation={3} square style={{ padding: "5px 20px" }}>
        <Row>
          <Col
            lg={2}
            md={4}
            style={{
              borderRight: "1px black solid",
              textAlign: "center"
            }}>
            <Avatar
              variant="rounded"
              src={props.businessLogo}
              alt=""
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                margin: "auto",
                border: "5px solid ghostwhite"
              }}></Avatar>
            <div>{props.location}</div>
            <div>
              <small>{props.businessName}</small>
            </div>
          </Col>
          <Col>
            <Row>
              <Col>
                <small>{props.industryType}</small>
                <h5>
                  {props.position} - {props.employType}
                </h5>
                <Row>
                  <Col>
                    <StaffBadges badgeCodeArray={props.badgeCodeArray} />
                  </Col>
                </Row>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <div>
                  <Tooltip title="Save" placement="right">
                    <SaveIcon />
                  </Tooltip>
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
