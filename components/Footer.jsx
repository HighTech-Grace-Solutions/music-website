'use-strict';

import React from 'react';

const date = new Date();
const footerObj = {
  name: 'Jared Donisvitch',
  date: date.getFullYear()
};

class Footer extends React.Component {
  render(){
    const styleSheet = {
      background: '',
      left:'0px',
      right:'0px',
      width: '100%',
      padding:'2em',
      color:'#9d9d9d',
      marginTop:'5em'
    };
    const footerStyle = {
      textAlign: 'center'
    };
    return (
      <div style={styleSheet}>
        <footer style={footerStyle}>
          <p>&copy; {footerObj.date} - {footerObj.name}</p>
        </footer>
      </div>
    );
  }
}

export default Footer;
