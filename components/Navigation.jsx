'use-strict';

import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import NavItemScroll from './NavItemScroll.jsx';
import ScrollLite from './ScrollLite.jsx';

const navObj = {
    title: 'JD',
    subtitle: 'Music, Software, Geo.',
    logo: 'images/logo-transparent.png',
    navStyle: {
        fontSize: '1em',
        color: 'white'
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

export default class Navigation extends React.Component {

    render() {

        return (

            <Navbar inverse fixedTop style={navObj.navBarStyle}>
                <Navbar.Header>
                    <Navbar.Brand className='bungee'>
                        <a style={navObj.brandStyle}><ScrollLite id='top' name={navObj.title}></ScrollLite></a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav style={navObj.navStyle}>
                        <NavItemScroll eventKey={1} id='about' name='ABOUT'></NavItemScroll>
                        <NavItemScroll eventKey={2} id='images' name='IMAGES'></NavItemScroll>
                        <NavItemScroll eventKey={3} id='projects' name='PROJECTS'></NavItemScroll>
                        <NavItemScroll eventKey={4} id='music' name='MUSIC'></NavItemScroll>
                        <NavItemScroll eventKey={5} id='social' name='SOCIAL'></NavItemScroll>
                        <NavItemScroll eventKey={6} id='video' name='VIDEO'></NavItemScroll>
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
