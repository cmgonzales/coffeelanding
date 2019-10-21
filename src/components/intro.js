import React from "react";
import { PropTypes } from "prop-types";
import { Container, Row, Col } from "reactstrap";
import { Button } from 'reactstrap';
import '../css/heading.css'

const Intro = props => (
  <Container>
    <Row>
      <Col md="6"></Col>
      <Col md="6">
        <div className = "coffee">
          <h1 className = "justCoffee">{props.title}</h1>
          <h3 className = "life">{props.description}</h3>
          </div>
          <Button className = "quote" color="primary">Get a quote</Button>{' '}
      </Col>
    </Row>
  </Container>

);

Intro.propType = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Intro;
