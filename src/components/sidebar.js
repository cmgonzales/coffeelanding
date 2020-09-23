import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";


const Ul = styled.ul`
   list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
 
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const SideBar = ({ open }) => {

   function scrollToTop () {
        scroll.scrollToTop();
      };
      
  return (
    <Ul open={open}>
      <li className="nav-item">
      <li>
      <button onClick = {scrollToTop}>test</button>
      </li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
            </li>
      <li>Process</li>
      <li>Contact Us</li>  
    </Ul>
  )
      }


export default SideBar