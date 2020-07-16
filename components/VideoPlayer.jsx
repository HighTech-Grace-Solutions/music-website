'use-strict';

import React from 'react';
import { Container, Row, Col, ResponsiveEmbed } from 'react-bootstrap';

export default class VideoPlayer extends React.Component {

    render() {

        return (

            <Container id="video">
                <Row>
                    <Col xs={12}>
                        <h1>Video</h1>
                        <h3>Penumbra Recordings - Naked&Free - October 2013</h3>
                        <iframe width="100%" height="600" frameBorder="0" src="https://www.youtube.com/embed/oneGp5Rkszk" />
                    </Col>
                </Row>
            </Container>
        );
    }
}
