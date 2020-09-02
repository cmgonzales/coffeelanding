import React from "react";
import Api from "../api/api";
import Card from "../Card/cards";
import { Container, Row, Col } from 'reactstrap';
import '../css/process.css'
const Process = props => (
<div  className = "contain">
  <Container className = 'cards'>
  <Row >
    {Api.map(({ pic, name, desc }) => (
      <>
      <Col md={4} className = "innerCard">
        <Card imge={pic} name={name} desc={desc} />
        </Col>
      </>
    ))}
    </Row>
    </Container>
    </div>
);

export default Process;
