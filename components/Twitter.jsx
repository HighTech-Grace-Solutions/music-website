'use-strict';

import React from 'react';

class Twitter extends React.Component {
  render() {
    return (
      <a href='https://twitter.com/jareddonisvitch'
        className='twitter-timeline'
        data-show-count='false'
        data-show-screen-name='false'
        data-height='350px'
        data-theme='dark'
      >
      </a>
    );
  }
}

export default Twitter;
