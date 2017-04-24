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
                <p>A funky experimental rock, jazz, blues, punk and metal band.</p>
                <p>More coming soon!</p>
              </Col>
              <Col xs={12} md={4}>
                <h2>The Obamacares</h2>
                <p>Experimental 3 piece stoner metal jam band.</p>
                <p>More coming soon!</p>
              </Col>
              <Col xs={12} md={4}>
                <h2>Norwood</h2>
                <p>Back in highschool I played guitar and sang for this group.</p>
                <p><a href='https://norwood.bandcamp.com/'>Check out our bandcamp!</a></p>
              </Col>
            </Row>
          </Grid>
        );
    }
}

export default Projects;
