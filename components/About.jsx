'use-strict';

import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

class About extends React.Component {
  render() {
    return (
      <Grid id='about'>
        <h1>About / Bio</h1>
        <Row className='show-grid'>
          <Col xs={12}>
            <h3>Early Career</h3>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default About;
