'use-strict';

import React from 'react';
import Hero from './Hero.jsx';
import ImageGrid from './ImageGrid.jsx';
import MusicPlayer from './MusicPlayer.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import SocialMedia from './SocialMedia.jsx';
import Projects from './Projects.jsx';
import About from './About.jsx';

const styleSheet = {
  height: 'auto',
  position: 'relative',
  top: '70px'
};

class Container extends React.Component  {
  render(){
    return (
      <div className='container-fluid' style={styleSheet}>
          <Hero/>
          <MusicPlayer/>
          <ImageGrid/>
          <VideoPlayer/>
          <SocialMedia/>
          <About/>
          <Projects/>
      </div>
    );
  }
}

export default Container;
