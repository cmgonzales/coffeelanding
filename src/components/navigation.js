import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import '../css/nav.css'
import logo from '../img/bean.png'

export default class Navigation extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav"  id="navbar">
      <div className="nav-content">
        <img
          src={logo}
          className="nav-logo"
          alt="Logo"
          onClick={this.scrollToTop}
        />
        <ul className="nav-items">
          <li className="nav-item">
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
        </ul>
      </div>
    </nav>
 
    );
  }
}

