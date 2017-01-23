'use-strict';

import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';

const navObj = {
  title: 'Jared Donisvitch',
  subtitle: 'Music, Software, Geo.',
  logo: 'images/logo-transparent.png'
};

class Navigation extends React.Component {
  render() {
    return(
      <Navbar inverse fixedTop fluid>
        <Navbar.Header>
          <Navbar.Brand className="bungee">
            {navObj.title}
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#About">About</NavItem>
            <NavItem eventKey={2} href="#Music">Music</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="https://facebook.com/donisvitchmusic" target="_blank">
              <span className="fa fa-facebook"></span>
            </NavItem>
            <NavItem eventKey={1} href="https://instagram.com/jdonisvitch" target="_blank">
              <span className="fa fa-instagram"></span>
            </NavItem>
            <NavItem eventKey={1} href="https://twitter.com/jareddonisvitch" target="_blank">
              <span className="fa fa-twitter"></span>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
