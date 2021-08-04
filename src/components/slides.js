import React from "react";
import dev from "../images/dev.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Slides = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <p>Say hello to the pakistan</p>
            <h3>We provide solutions for your bussinues</h3>
            <p>
              Adele stopped singing due to damage to her vocal cords, which
              prevented her from singing on the doctor's advice to avoid further
              damage. Adele announced she left music on Twitter, explaining the
              reason we mentioned, but Adele plans to return gradually.
            </p>
            <Button variant="outline-primary">Primary</Button>{' '}
          </Col>
          <Col>
            <img src={dev} className="" alt="logo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Slides;
