'use-strict';

import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const heroObj = {
  title: 'Jared Donisvitch',
  subtitle: 'A unique Singer-Songwriter and Guitarist in Portland, Maine.'
};

const styleSheet = {
  hero: {
    color: 'white',
    borderRadius: '0',
    textAlign: 'center',
    background: 'transparent',
    marginTop: '30px'
  }
};

class Hero extends React.Component {
  render() {
    return (
      <Jumbotron style={styleSheet.hero} id='top'>
        <h1>{heroObj.title}</h1>
        <h3>{heroObj.subtitle}</h3>
      </Jumbotron>
    );
  }
}

export default Hero;
