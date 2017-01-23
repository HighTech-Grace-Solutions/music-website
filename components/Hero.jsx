'use-strict';

import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const heroObj = {
  title: 'Jared Donisvitch',
  subtitle: 'A unique Singer-Songwriter in Portland, Maine.'
};

class Hero extends React.Component {
  render() {

    const styleSheet = {
      hero: {
        color: 'white',
        borderRadius: '0',
        background: 'transparent',
        textAlign: 'center'
      }
    };

    return (
      <Jumbotron style={styleSheet.hero}>
        <h1 className="bungee">{heroObj.title}</h1>
        <h3>{heroObj.subtitle}</h3>
      </Jumbotron>
    );
  }
}

export default Hero;
