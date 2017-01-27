'use-strict';

import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const heroObj = {
  title: 'Jared Donisvitch',
  subtitle: 'A unique Singer-Songwriter and Guitarist in Portland, Maine.'
};

class Hero extends React.Component {
  render() {

    const styleSheet = {
      hero: {
        color: 'black',
        borderRadius: '0',
        textAlign: 'center',
        background: 'url(images/jared-penumbra-glitch.png) no-repeat',
        backgroundPosition: 'center 30%',
        marginTop: '50px'
      },
      h3: {
        color: 'black'
      }
    };

    return (
      <Jumbotron style={styleSheet.hero} id='top'>
        <h1 className='bungee'>{heroObj.title}</h1>
        <h3 style={styleSheet.h3}>{heroObj.subtitle}</h3>
      </Jumbotron>
    );
  }
}

export default Hero;
