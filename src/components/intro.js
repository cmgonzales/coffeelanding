import React from "react";
import useModal from './useModal'

import Modal from './modal'
import { PropTypes } from "prop-types";
import { Container, Row, Col } from "reactstrap";
import { Button } from 'reactstrap';
import '../css/heading.css'


const Intro = props => {
  const {isShowing, toggle} = useModal()
  return(
    <div>
  <Container>
    <Row>
      <Col md="6"></Col>
      <Col md="6">
        <div className = "coffee">
          <h1 className = "justCoffee">{props.title}</h1>
          <h3 className = "life">{props.description}</h3>
          </div>
          <Button onClick = {toggle} className = "quote" color="primary">Get a quote</Button>{' '}
      </Col>
    </Row>
  </Container> 
  <Modal
  isShowing = {isShowing}
  hide = {toggle}
  />
  </div>
  )
};

Intro.propType = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Intro;
