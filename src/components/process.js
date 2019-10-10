import React from 'react'
import Api from '../api/api'
import Card from '../Card/cards'
import pic from '../api/package.jpg'


const Process = props => (
  <div>
    {Api.map(({ img, name, desc }) => (
      <>
        <Card 
        img = {<img src ={pic} alt = "tst"/> }
        name={name} 
        desc={desc} />
      </>
    ))}
    
    <img src = {pic} alt = "s">

    </img>
  </div>
);

export default Process;

