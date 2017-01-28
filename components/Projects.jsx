'use-strict';

import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

class Projects extends React.Component {
  render() {

    return (
      <Grid id='projects'>
        <h1> Current / Past Musical Projects </h1>
        <Row className='show-grid'>
          <Col xs={12} md={4}>
            <h1>Heard of Cats</h1>
          </Col>
          <Col xs={12} md={4}>
            <h1>The Obamacares</h1>
          </Col>
          <Col xs={12} md={4}>
            <h1>Norwood.</h1>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Projects;
