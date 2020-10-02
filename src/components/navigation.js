import React from 'react'
import styled from 'styled-components';
import Burger from './Burger'
import { animateScroll as scroll } from "react-scroll";

const Nav = styled.nav`
  width: 80%;
  height: 55px;
  margin: 0 auto;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  
  .logo {
    padding: 15px 0;
    height: 10px;
    width: 20%;
    color: brown;
  }
  `

const Navbar = () => {

  const logo = () =>{
    scroll.scrollToTop();
  }

    return (
      
      <Nav>
      <div className = 'logo' onClick = {logo}>
        Coffee Shope
      </div>   
        <Burger/> 
    </Nav>
 
 
    );
}

export default Navbar