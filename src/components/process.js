import React from "react";
import Api from "../api/api";
import Card from "../Card/cards";
import { Container, Row, Col } from 'reactstrap';
import '../css/process.css'
const Process = props => (
<div  className = "contain">
  <Container fluid>
  <Row >
  <Col md ={1}></Col>
    {Api.map(({ pic, name, desc }) => (
      <>
      <Col md={3} className = "innerCard">
        <Card imge={pic} name={name} desc={desc} />
        </Col>
      </>
    ))}
    <Col md ={1}></Col>
    </Row>
    </Container>
    </div>
);

export default Process;
