import React from 'react'
import beans from '../img/beans.jpg'
import Coffee from './coffee'
import { Container, Row, Col } from "reactstrap";
import '../css/body.css'

const Body = props => (
  <div className = 'about'>
    <Container>
    <Row>
    <Col md="6">
    <Coffee 
    title = "Imported coffee worldwide"
    body = "The ideal conditions for coffee trees to thrive are found around the world in along the Equatorial zone called “The Bean Belt,” located between latitudes 25 
    degrees North and 30 degrees South." />
    </Col>
    <Col md="6">
    <img className = "coffee-beans" src = {beans} alt = "coffee beans"></img>
    </Col>
  </Row>
</Container>
</div>
)
export default Body