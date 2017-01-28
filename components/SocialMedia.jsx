'use-strict';

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Twitter from './Twitter.jsx';
import Instagram from './Instagram.jsx';

const MediaOutlet = {
  facebook: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdonisvitchmusic&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
};

const StyleSheet = {
  border: '0',
  overflow: 'hidden',
  width: '100%',
  height: '350px'
};

class SocialMedia extends React.Component {
  render() {
    return (
      <Grid id='social'>
        <Row>
          <Col xs={12} sm={12}>
            <h1>Social</h1>
          </Col>
          <Col xs={12} sm={4}>
            <h3><span className='fa fa-facebook'></span></h3>
            <iframe src={MediaOutlet.facebook} style={StyleSheet} frameBorder='0' allowTransparency='true'></iframe>
          </Col>
          <Col xs={12} sm={4}>
            <h3><span className='fa fa-twitter'></span></h3>
            <Twitter />
          </Col>
          <Col xs={12} sm={4}>
            <h3><span className='fa fa-instagram'></span></h3>
            <Instagram />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default SocialMedia;
