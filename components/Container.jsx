'use-strict';

import React from 'react';
import Hero from './Hero.jsx';
import ImageGrid from './ImageGrid.jsx';
import MusicPlayer from './MusicPlayer.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import SocialMedia from './SocialMedia.jsx';
import Projects from './Projects.jsx';
import About from './About.jsx';

const style = {
    height: 'auto',
    position: 'relative'
};

export default class Container extends React.Component {

    render(){

        return (
          
            <div className='container-fluid main' style={style}>
                <Hero/>
                <About/>
                <SocialMedia/>
                <ImageGrid/>
                <MusicPlayer/>
                <VideoPlayer/>
                <Projects/>
            </div>
        );
    }
}
