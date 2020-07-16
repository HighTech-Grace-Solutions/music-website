'use-strict';

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NavItemScroll from './NavItemScroll.jsx';
import ScrollLite from './ScrollLite.jsx';

const navObj = {
    title: 'JD',
    subtitle: 'Music, Software, Geo.',
    logo: 'images/logo-transparent.png',
    navStyle: {
        fontSize: '1em',
        color: 'white',
        marginTop: '16px',
        float: 'right'
    },
    brandStyle: {
        color: 'white',
        fontSize: '1.4em'
    },
    linkStyle: {
      marginRight: '16px'
    }
};

export default class Navigation extends React.Component {

    render() {

        return (

            <Navbar expand bg="dark" variant="dark" sticky="top">
                <Navbar.Brand className="bungee white" style={navObj.brandStyle}>
                    {navObj.title}
                </Navbar.Brand>
                <Nav className="mr-auto" style={navObj.navStyle}>
                    <Nav.Link
                        href="https://facebook.com/donisvitchmusic"
                        target="_blank"
                        alt="Facebook"
                        style={navObj.linkStyle}
                    >
                        <span className="fa fa-facebook white"></span>
                    </Nav.Link>
                    <Nav.Link
                        href="https://instagram.com/jdonisvitch"
                        target="_blank"
                        alt="Instagram"
                        style={navObj.linkStyle}
                      >
                        <span className="fa fa-instagram white"></span>
                    </Nav.Link>
                    <Nav.Link
                        href="https://twitter.com/jareddonisvitch"
                        target="_blank"
                        alt="Twitter"
                        style={navObj.linkStyle}
                    >
                        <span className="fa fa-twitter white"></span>
                    </Nav.Link>
                    <Nav.Link
                        href="https://reverbnation.com/donisvitch"
                        target="_blank"
                        alt="ReverbNation"
                        style={navObj.linkStyle}
                      >
                        <span className="fa fa-star white"></span>
                    </Nav.Link>
                    <Nav.Link
                        href="https://donisvitch.bandcamp.com"
                        target="_blank"
                        alt="Bandcamp"
                        style={navObj.linkStyle}
                    >
                        <span className="fa fa-bandcamp white"></span>
                    </Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}
