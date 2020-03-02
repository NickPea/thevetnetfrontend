import React from "react";
import { Paper, Avatar } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import VetImage from "../Assets/vetstaff.jpg";
import css from "./StaffProfile.module.css";

export default function StaffProfile() {
  return (
    <div>
      <Paper>
        <div className={css.spHeader}>
          <Row>
            <Col>
              <Avatar
                alt="staff profile image"
                src={VetImage}
                className={css.spHeaderImage}
                style={{ width: "300px", height: "300px" }}
              />
            </Col>
            <Col>hello</Col>
          </Row>
        </div>

        <div className={css.spIntro}>
          <Row>
            <Col></Col>
          </Row>
        </div>
      </Paper>
    </div>
  );
}
