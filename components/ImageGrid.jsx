'use-strict';

import React from 'react';
import { Grid, Row, Col, Image, ResponsiveEmbed } from 'react-bootstrap';

const gridObj = {
  image: 'images/local-buzz-2014.jpg',
  image_2: 'images/local-buzz-2-2014.jpg',
  image_3: 'images/local-buzz-poster.jpg'
};

class ImageGrid extends React.Component {
  render() {

    return (
      <Grid>

        <Row className="video">
          <Col xs={12}>
          <h3>Penumbra Recordings - Naked&Free - 2014</h3>
          <ResponsiveEmbed a16by9>
            <embed type="video/mp4" src="https://www.youtube.com/embed/oneGp5Rkszk" />
          </ResponsiveEmbed>
          </Col>
        </Row>

        <h3>Local Buzz Acoustic Showcase 2014</h3>
        <Row className="show-grid">
          <Col xs={12} md={4}>
            <Image src={gridObj.image} responsive />
          </Col>
          <Col xs={12} md={4}>
            <Image src={gridObj.image_3} responsive />
          </Col>
          <Col xs={12} md={4}>
            <Image src={gridObj.image_2} responsive />
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default ImageGrid;
