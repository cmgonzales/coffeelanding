import React from 'react'
import styled from 'styled-components';
import Burger from './Burger'
import bean from '../img/bean.png'

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
    width: 10px;
  }
  `

const Navbar = () => {

 
 
    return (
      
      <Nav>
      <div className = 'logo'>
        {bean}
      </div>   
        <Burger/> 
    </Nav>
 
 
    );
}

export default Navbar