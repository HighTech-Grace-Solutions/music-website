'use-strict';

import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

const gridObj = {
  localbuzz: {
    img_1: 'images/local-buzz.jpg',
    img_2: 'images/local-buzz-2.jpg',
    img_3: 'images/local-buzz-1.jpg'
  },
  posters: {
    img_1: 'images/local-buzz-poster.jpg',
    img_2: 'images/pantry-party-poster.jpg',
    img_3: 'images/flask-lounge-poster.jpg'
  },
  sparksea: {
    img_1: 'images/sparksea-phome-group.jpg',
    img_2: 'images/sparksea-heard-of-cats.jpg',
    img_3: 'images/sparksea-phome-group-2.jpg'
  }
};

class ImageGrid extends React.Component {
  render() {

    return (
      <Grid id='images'>
        <h1>Images of Past Shows / Projects</h1>
        <h3>Sparksea - Portland House Of Music - 2016</h3>
        <Row className='show-grid'>
          <Col xs={12} md={4}>
            <Image src={gridObj.sparksea.img_1} responsive />
          </Col>
          <Col xs={12} md={4}>
            <Image src={gridObj.sparksea.img_2} responsive />
          </Col>
          <Col xs={12} md={4}>
            <Image src={gridObj.sparksea.img_3} responsive />
          </Col>
        </Row>
        <h5>Now dubbed the <b>Heard Of Cats</b> - the Cats were featured as part of <b>Sparksea's</b> band for her show at PHOME.</h5>
        <h3>Local Buzz Acoustic Showcase - 2014</h3>
        <Row className='show-grid'>
          <Col xs={12} md={4}>
            <Image src={gridObj.localbuzz.img_1} responsive />
          </Col>
          <Col xs={12} md={4}>
            <Image src={gridObj.localbuzz.img_2} responsive />
          </Col>
          <Col xs={12} md={4}>
            <Image src={gridObj.localbuzz.img_3} responsive />
          </Col>
        </Row>
        <h5>Ryan Ellis (Mechanical Banshees), Chelsea Toussaint (Sparksea), and I jammed some really fun acoustic shows @TheLocalBuzz.</h5>
        <h3>Posters of Past Shows</h3>
        <Row className='show-grid'>
          <Col xs={12} md={4}>
            <Image src={gridObj.posters.img_1} responsive />
          </Col>
          <Col xs={12} md={4}>
            <Image src={gridObj.posters.img_2} responsive />
          </Col>
          <Col xs={12} md={4}>
            <Image src={gridObj.posters.img_3} responsive />
          </Col>
        </Row>
        <h5>While supporting my acoustic project, these are some of the posters from the shows that I played!</h5>
      </Grid>
    );
  }
}

export default ImageGrid;
