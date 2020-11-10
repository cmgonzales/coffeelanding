
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import '../css/process.css'

const Cards = (props) => {
  return (
    <div style ={{ marginTop: '20px'}}>
      <Card style ={{maxWidth: 355,}} >
        <CardImg style ={{height: 250}}  top width="100%" src= {props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle><b>{props.name}</b></CardTitle>   
          <CardText  >{props.desc}</CardText> 
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;