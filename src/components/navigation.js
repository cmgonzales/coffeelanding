import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import '../css/nav.css'
import logo from '../img/bean.png'
import {
  Nav,
  NavItem,
  Navbar,
  NavLink,
  NavbarBrand
  
} from 'reactstrap'
export default class Navigation extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <Navbar color="light" light expand="md">
      <NavbarBrand >
          <img
            style = {{height: '25px'}}
            src = {logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          </NavbarBrand>
          <Nav className="mr-auto" navbar>
          <NavItem>
          <NavLink href = '#'>
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
              >
                About
              </Link>
              </NavLink>
              </NavItem>
           
           <NavItem>
           <NavLink href = '#'>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Process
              </Link>
              </NavLink>
              </NavItem>
            <NavItem>
            <NavLink href = '#'>
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact US
              </Link>
              </NavLink>
              </NavItem>
         </Nav> 
      </Navbar>
    );
  }
}

