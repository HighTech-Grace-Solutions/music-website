'use-strict';

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const BandCamp = {
    runaway: 'https://bandcamp.com/EmbeddedPlayer/album=2832270786/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/',
    storm: 'https://bandcamp.com/EmbeddedPlayer/album=647548609/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=1922035254/transparent=true/'
};

const style = {
    border: '0',
    width: '100%',
    height: '700px'
};

export default class MusicPlayer extends React.Component {

    render() {

        return (

            <Grid id='music'>
                <Row>
                    <Col xs={12} sm={12}>
                        <h1>Recordings</h1>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h3>Runaway EP <i>- released October 24, 2013</i></h3>
                        <iframe style={style} src={BandCamp.runaway} seamless>
                            <a href='https://donisvitch.bandcamp.com/album/runaway'>Runaway</a>
                        </iframe>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h3>Riding Out The Storm <i>- released August 1, 2013</i></h3>
                        <iframe style={style} src={BandCamp.storm} seamless>
                            <a href='https://penumbrarecordings.bandcamp.com/track/riding-out-the-storm'>Riding Out The Storm</a>
                        </iframe>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
