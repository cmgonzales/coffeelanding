import React from "react";
import { PropTypes } from "prop-types";

import '../css/heading.css'



const Intro = props => {
 
  return(
    <div className = "intro">
  
        <div className = "coffee">
          <h1 className = "justCoffee">{props.title}</h1>
          <h3 className = "life">{props.description}</h3>
          </div>
     
  
  </div>
  )
};

Intro.propType = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Intro;
