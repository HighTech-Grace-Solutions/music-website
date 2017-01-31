'use-strict';

import React from 'react';
import { Jumbotron } from 'react-bootstrap';

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
    }
};

class Hero extends React.Component {
  render() {
    return (
      <Jumbotron style={internals.styles.hero} id='top'>
        <p>
          <h1 style={internals.styles.h1}>{heroObj.title}</h1>
          <h3 style={internals.styles.h3}>{heroObj.subtitle}</h3>
        </p>
      </Jumbotron>
    );
  }
}

export default Hero;
