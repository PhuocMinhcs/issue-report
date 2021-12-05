import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";
import ButtonLink from '../ButtonLink';
import './style.scss';

const NavbarComponent = () => {
    return <div className="nav-bar-component">
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
        <Nav>
          <ButtonLink to="/about">+ Add New</ButtonLink>
        </Nav>
      </Container>
    </Navbar>
  </div>
}

export default NavbarComponent;
