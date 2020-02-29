import React from "react";
import { Paper } from "@material-ui/core";
import { Image, Col, Row } from "react-bootstrap";
import VetImage from "../Assets/vetstaff.jpg";

export default function StaffProfile() {
  return (
    <div>
      <Paper>
        <Row>
          <Col md={4}>
            <Image alt="blah" src={VetImage} style={{ width: "300px" }} />
          </Col>
          <Col>
            <h2>hello im Cindy!</h2>
            <h5>and I'm currently a Veterinary Specialist</h5>
            <h5>
              I work nights to feed my 6 kids and score a little molly now and
              then to take the edge off
            </h5>
            <h5>
              trust me with your pets and I'll do my best not to give them super
              aids
            </h5>
          </Col>
        </Row>
      </Paper>
    </div>
  );
}
