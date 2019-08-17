'use-strict';

import React from 'react';
import { Grid, Row, Col, ResponsiveEmbed } from 'react-bootstrap';

export default class VideoPlayer extends React.Component {

    render() {

        return (

            <Grid id='video'>
                <Row>
                    <Col xs={12}>
                        <h1>Video</h1>
                        <h3>Penumbra Recordings - Naked&Free - October 2013</h3>
                        <ResponsiveEmbed a16by9>
                            <embed type='video/mp4' src='https://www.youtube.com/embed/oneGp5Rkszk' />
                        </ResponsiveEmbed>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
