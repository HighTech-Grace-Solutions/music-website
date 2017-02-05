'use-strict';

import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import ScrollLite from './ScrollLite.jsx';

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
    content:{
      maxWidth: '50vw'
    },
    scroll:{
      position: 'relative',
      top: '15vh'
    }
};

class Hero extends React.Component {
  render() {
    return (
      <Jumbotron style={internals.styles.hero} id='top'>
        <div>
          <h1 style={internals.styles.h1}>{heroObj.title}</h1>
          <h3 style={internals.styles.h3}>{heroObj.subtitle}</h3>
          <ScrollLite style={internals.styles.scroll} id='about' speed={5} className='fa fa-arrow-down fa-2x'></ScrollLite>
        </div>

      </Jumbotron>
    );
  }
}

export default Hero;
