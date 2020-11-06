import React from 'react'
import styled from 'styled-components';
import Burger from './Burger'
import { animateScroll as scroll } from "react-scroll";

const Nav = styled.nav`
  width: 80%;
  height: 4vmax;
  margin: 0 auto;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;


  @media only screen and (max-width: 768px) {
 
    height: 6vmax;
  
}
  
  .logo {
    padding: 15px 0;
    height: 10px;
    width: 15%;
    color: brown;
    cursor: pointer;
    font-size: 1.1vmax;

  }
  `

const Navbar = () => {

  const logo = () =>{
    scroll.scrollToTop();
  }

    return (
      
      <Nav>
      <div className = 'logo' onClick = {logo}>
        Dan's Coffee 
      </div>   
        <Burger/> 
    </Nav>
 
 
    );
}

export default Navbar