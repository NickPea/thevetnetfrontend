import React from "react";
import { Paper } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";

export default function Provider() {
  return (
    <div>
      <Paper>
        <Row>
          <Col>
            <h1>GreenCross Pty.</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>Location: 345 Anne Strett Brisbane CBD</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>Phone: 1024829</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>Email: something@somewhere</h6>
          </Col>
        </Row>
      </Paper>
    </div>
  );
}
