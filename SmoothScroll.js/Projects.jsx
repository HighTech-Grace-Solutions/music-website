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
            <h2>Heard of Cats</h2>
          </Col>
          <Col xs={12} md={4}>
            <h2>The Obamacares</h2>
          </Col>
          <Col xs={12} md={4}>
            <h2>Norwood</h2>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Projects;
