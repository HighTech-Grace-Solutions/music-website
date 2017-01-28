'use-strict';

import React from 'react';
import Hero from './Hero.jsx';
import ImageGrid from './ImageGrid.jsx';
import MusicPlayer from './MusicPlayer.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import SocialMedia from './SocialMedia.jsx';
import Projects from './Projects.jsx';
import About from './About.jsx';

class Container extends React.Component  {
  render(){

    const styleSheet = {
      height: 'auto',
      position: 'relative',
      top: '70px'
    };

    return (
      <div className='container-fluid' style={styleSheet}>
          <Hero/>
          <About/>
          <MusicPlayer/>
          <ImageGrid/>
          <VideoPlayer/>
          <SocialMedia/>
          <Projects/>
      </div>
    );
  }
}

export default Container;
