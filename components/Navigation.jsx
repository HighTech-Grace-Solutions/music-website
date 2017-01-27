'use-strict';

import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const navObj = {
  title: 'Jared Donisvitch',
  subtitle: 'Music, Software, Geo.',
  logo: 'images/logo-transparent.png'
};

class Navigation extends React.Component {
  render() {

    return(
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand className='bungee'>
            <a href='#top'>{navObj.title}</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href='#about'>ABOUT</NavItem>
            <NavItem eventKey={2} href='#images'>PHOTOS</NavItem>
            <NavItem eventKey={3} href='#music'>MUSIC</NavItem>
            <NavItem eventKey={4} href='#social'>SOCIAL</NavItem>
            <NavItem eventKey={5} href='#video'>VIDEO</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={6} href='https://facebook.com/donisvitchmusic' target='_blank'>
              <span className='fa fa-facebook'></span>
            </NavItem>
            <NavItem eventKey={7} href='https://instagram.com/jdonisvitch' target='_blank'>
              <span className='fa fa-instagram'></span>
            </NavItem>
            <NavItem eventKey={8} href='https://twitter.com/jareddonisvitch' target='_blank'>
              <span className='fa fa-twitter'></span>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
