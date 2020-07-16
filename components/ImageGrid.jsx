'use-strict';

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

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

            <Container id="images">
                <h1>Images / Photos</h1>
                <h3>Local Buzz Acoustic Showcase - 2014</h3>
                <Row className="show-grid">
                    <Col xs md={4}>
                        <Image src={gridObj.localbuzz.img_1} width="100%"/>
                    </Col>
                    <Col xs md={4}>
                        <Image src={gridObj.localbuzz.img_2} width="100%" />
                    </Col>
                    <Col xs md={4}>
                        <Image src={gridObj.localbuzz.img_3} width="100%" />
                    </Col>
                </Row>
                <h5>Jammed out some really fun acoustic shows @TheLocalBuzz.</h5>
            </Container>
        );
    }
}
