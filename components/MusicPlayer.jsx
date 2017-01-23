'use-strict';

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const BandCamp = "https://bandcamp.com/EmbeddedPlayer/album=2832270786/size=large/bgcol=333333/linkcol=0f91ff/artwork=small/transparent=true/";

const StyleSheet = {
  border: '0',
  width: '100%',
  height: '400px'
};

class MusicPlayer extends React.Component {
  render() {

    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h3>Music Player</h3>
            <iframe style={StyleSheet} src={BandCamp} seamless>
              <a href="http://donisvitch.bandcamp.com/album/runaway">Runaway by Jared Donisvitch</a>
            </iframe>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default MusicPlayer;
