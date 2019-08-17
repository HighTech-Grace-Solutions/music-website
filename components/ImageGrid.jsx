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
    }
};

export default class ImageGrid extends React.Component {

    render() {

        return (

            <Grid id='images'>
                <h1>Images / Photos</h1>
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
                <h5>I jammed out some really fun acoustic shows @TheLocalBuzz.</h5>
            </Grid>
        );
    }
}
