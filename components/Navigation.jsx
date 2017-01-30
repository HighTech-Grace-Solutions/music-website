'use-strict';

import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


const navObj = {
  title: 'JD',
  subtitle: 'Music, Software, Geo.',
  logo: 'images/logo-transparent.png',
  navStyle: {
    fontSize: '1.2em',
    color: 'white',
    fontWeight: 'bold'
  },
  navBarStyle: {
    backgroundColor: 'rgba(0,0,0,0.8)'
  },
  brandStyle: {
    color: 'white',
    fontSize: '1.4em',
    marginTop: '0px'
  }
};

class Navigation extends React.Component {
  render() {
    return(
      <Navbar inverse fixedTop style={navObj.navBarStyle}>
        <Navbar.Header>
          <Navbar.Brand className='bungee'>
            <a href='#top' style={navObj.brandStyle}>{navObj.title}</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav style={navObj.navStyle}>
            <NavItem eventKey={1} href='#about'>ABOUT</NavItem>
            <NavItem eventKey={2} href='#images'>PHOTOS</NavItem>
            <NavItem eventKey={3} href='#projects'>PROJECTS</NavItem>
            <NavItem eventKey={4} href='#music'>MUSIC</NavItem>
            <NavItem eventKey={5} href='#social'>SOCIAL</NavItem>
            <NavItem eventKey={6} href='#video'>VIDEO</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={7} href='https://facebook.com/donisvitchmusic' target='_blank' alt='Facebook'>
              <span className='fa fa-facebook'></span>
            </NavItem>
            <NavItem eventKey={8} href='https://instagram.com/jdonisvitch' target='_blank' alt='Instagram'>
              <span className='fa fa-instagram'></span>
            </NavItem>
            <NavItem eventKey={9} href='https://twitter.com/jareddonisvitch' target='_blank' alt='Twitter'>
              <span className='fa fa-twitter'></span>
            </NavItem>
            <NavItem eventKey={10} href='https://reverbnation.com/donisvitch' target='_blank' alt='ReverbNation'>
              <span className='fa fa-star'></span>
            </NavItem>
            <NavItem eventKey={11} href='https://donisvitch.bandcamp.com' target='_blank' alt='Bandcamp'>
              <span className='fa fa-bandcamp'></span>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
