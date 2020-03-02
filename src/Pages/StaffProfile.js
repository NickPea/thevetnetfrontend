import React from "react";
import { Paper, Avatar } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import VetImage from "../Assets/vetstaff.jpg";
import css from "./StaffProfile.module.css";

export default function StaffProfile() {
  return (
    <>
      <Paper className={css.spWrapper}>
        <div className={css.spHeader}>
          <Row>
            <Col className="d-flex justify-content-center">
              <Avatar
                alt="staff profile image"
                src={VetImage}
                className={css.spHeaderImage}
                style={{ width: "300px", height: "300px" }}
              />
            </Col>
            <Col md={7} style={{ margin: "20px" }}>
              <h1
                style={{
                  color: "white",
                  fontWeight: "bold",
                  display: "inline-block"
                }}>
                <u>Cindy Ranger</u>
              </h1>
              <h3>Veterinarian</h3>
            </Col>
          </Row>
        </div>

        <Row>
          <Col>
            <div className={css.spSummary}>
              <h6 className={css.spTitle}>Profressional Summary</h6>
              <hr />
              <p>looking for prac work, please consider me</p>
            </div>
          </Col>
          <Col md={4}>
            <div className={css.spCredentials}>
              <h6 className={css.spTitle}>Credentials</h6>
              <hr />
            </div>
          </Col>
        </Row>
        <div className={css.spExperience}>
          <Row>
            <Col>
              <h6 className={css.spTitle}>Experience</h6>
              <hr />
            </Col>
          </Row>
        </div>
      </Paper>
    </>
  );
}
