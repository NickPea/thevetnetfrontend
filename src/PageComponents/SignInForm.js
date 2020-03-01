import React from "react";
import { Paper } from "@material-ui/core";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function SignInForm() {
  return (
    <div>
      <Row>
        <Col md={8}></Col>
        <Col>
          <Paper>
            <div style={{ padding: "10px" }}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <Row>
                  <Col style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button variant="primary" type="submit">
                      Sign In
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>
                      Not a member?
                      <Link to="/signup"> Sign Up Here</Link>
                    </small>
                  </Col>
                </Row>
              </Form>
            </div>
          </Paper>
        </Col>
      </Row>
    </div>
  );
}
