import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import "./App.css";

function App() {
  const firstName = "Abdoulaye"; // Replace with your name or leave blank

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={4}>
                  <Image />
                </Col>
                <Col md={8}>
                  <Name />
                  <Price />
                  <Description />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <div className="text-center mt-4">
            {firstName ? (
              <>
                <p>Hello, {firstName}!</p>
                <img
                  src="images/watch1.jpg"
                  alt="User"
                  className="rounded-circle"
                />
              </>
            ) : (
              <p>Hello, there!</p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
