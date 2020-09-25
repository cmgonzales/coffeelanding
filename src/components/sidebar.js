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
  
      <button onClick = {scrollToTop}>test</button>
      </li>
      <li>
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
         
          <li className="nav-item">
            <Link
              activeClass="active"
              to="process"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Process
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact Us
            </Link>
          </li>
        
    </Ul>
  )
      }


export default SideBar