'use-strict';

import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import SmoothScroll from './SmoothScroll.jsx';

const heroObj = {
  title: 'Jared Donisvitch',
  subtitle: 'Singer-Songwriter, and Guitarist in Portland, Maine.'
};

const internals = {};
  internals.styles = {
    hero: {
      color: 'white',
      borderRadius: '0',
      textAlign: 'center',
      background: 'transparent',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    p:{
      maxWidth: '50%'
    },
    scroll:{
      alignSelf: 'flex-end'
    }
};

class Hero extends React.Component {
  render() {
    return (
      <Jumbotron style={internals.styles.hero} id='top'>
        <div>
          <h1 style={internals.styles.h1}>{heroObj.title}</h1>
          <h3 style={internals.styles.h3}>{heroObj.subtitle}</h3>
        </div>
        <div style={internals.styles.scroll}>
          <SmoothScroll id='about' name='vvv'></SmoothScroll>
        </div>
      </Jumbotron>
    );
  }
}

export default Hero;
