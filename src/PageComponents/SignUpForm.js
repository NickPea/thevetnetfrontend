import React from "react";
import { Card as Paper, Container } from "@material-ui/core";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SignUpForm() {
  return (
    <div>
      <Row>
        <Col md={3}></Col>
        <Col>
          <Paper style={{ padding: "10px" }}>
            <h6 style={{ paddingBottom: "10px" }}>Lets get started...</h6>
            <h3>Create an account</h3>
            <br />
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>New Username</Form.Label>
                <Form.Control type="email" placeholder="enter a username" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" placeholder="enter a password" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword2">
                <Form.Label>Re-Enter New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="re-enter a password"
                />
              </Form.Group>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="primary" type="submit">
                  Create Account
                </Button>
              </div>
            </Form>
            <small>
              Already a member?
              <Link to="/signin"> Sign In Here</Link>
            </small>
          </Paper>
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
}
