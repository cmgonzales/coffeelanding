import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`

  @media (max-width: 768px) {
 
    background-color: #0D2538;

    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(100%)'};
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
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Sign In</li>
      <li>Sign Up</li>
    </Ul>
  )
}

export default SideBar