'use-strict';

import React from 'react';
import Hero from './Hero.jsx';
import ImageGrid from './ImageGrid.jsx';
import MusicPlayer from './MusicPlayer.jsx';
import VideoPlayer from './VideoPlayer.jsx';

class Container extends React.Component  {
  render(){

    const styleSheet = {
      height: 'auto',
      paddingTop: '70px'
    };

    return (
      <div className='container-fluid' style={styleSheet}>
          <Hero/>
          <VideoPlayer/>
          <MusicPlayer/>
          <ImageGrid/>
      </div>
    );
  }
}

export default Container;
