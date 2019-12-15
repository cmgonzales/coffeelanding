import React, {useEffect, useState} from "react";
import Intro from "./intro";
import '../App.css'
import desktopImg from '../img/coffee.jpg'
import mobileImg from '../img/coffeeMobile.jpg'

const Heading = props => {

  const imageUrl = useWindowWidth() >= 768 ? desktopImg : mobileImg;

  return (
    <div style={{backgroundImage: `url(${imageUrl})` }} className="background">
      <Intro
      title="It's not just coffee" 
      description="Its a way of life!" />
       </div>
  );
};


const useWindowWidth = () => {
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

  const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
  },[]);

  return windowWidth;
};
    
 export default Heading

    