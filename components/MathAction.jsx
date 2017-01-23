'use-strict';

import React from 'react';

class MathAction extends React.Component {

  constructor(){
    super();
    this.count = 0;
  }

  forceUpdateHandler(){
     this.forceUpdate();
  }

  updateSuccessHandler(){
    this.count ++;
  }

  math(){
    const numbers = [];
    for (var i = 0; i < 100; ++i) {
        numbers.push(1000000/Math.random());
    }
    return numbers;
  }

  render() {
    const styleSheet = {
      color: 'white'
    };

    const buttonStyle = {
      background: 'transparent',
      border: '2px solid white',
      color:'white',
      marginBottom: '10px',
      fontSize: '2em'
    };

    return (
      <div style={styleSheet}>
        <input type='button' style={buttonStyle} className='btn btn-block' onClick={::this.forceUpdateHandler} value='Hit me!'/>
        <h2>You have run the math {this.count} times</h2>
        <textarea
          readOnly
          style={{height:'300px'}}
          className='form-control'
          onChange={this.updateSuccessHandler()}
          value={this.math()}
        >
        </textarea>
      </div>
    );
  }
}

export default MathAction;
