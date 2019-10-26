import React from "react";
import { PropTypes } from "prop-types";
import { Container, Row, Col } from "reactstrap";
import { Button } from 'reactstrap';
import useModal from './useModal';
import '../css/heading.css'
import Modal from "./modal";


const Intro = props => {
  const {toggle, isShowing} = useModal();
  return(
    <div>
  <Container>
    <Row>
      <Col md="6"></Col>
      <Col md="6">
        <div className = "coffee">
          <h1 className = "justCoffee">{props.title}</h1>
          <h3 className = "life">{props.description}</h3>
          <Button color="primary" onClick = {toggle}>Get a quote</Button>{' '}
          </div>
      </Col>
    </Row>
  </Container> 
  <Modal
        isShowing={isShowing}
        hide={toggle}
      />
  </div>
  )
};

Intro.propType = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Intro;
