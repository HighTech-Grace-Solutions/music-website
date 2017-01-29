'use-strict';

import React from 'react';

const date = new Date();

const footerObj = {
  name: 'JARED DONISVITCH',
  date: date.getFullYear()
};

const styleSheet = {
  container:{
    background: '',
    left:'0px',
    right:'0px',
    width: '100%',
    padding:'2em',
    color:'#9d9d9d',
    marginTop:'5em'
  },
  footer:{
    textAlign: 'center'
  }
};

class Footer extends React.Component {
  render(){
    return (
      <div style={styleSheet.container}>
        <footer style={styleSheet.footer}>
          <p>&copy; {footerObj.date} - {footerObj.name}</p>
        </footer>
      </div>
    );
  }
}

export default Footer;
