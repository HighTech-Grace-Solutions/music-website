'use-strict';

import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

class Projects extends React.Component {

    render() {

        return (

            <Container id='projects'>
                <h1> Past Musical Projects </h1>
                <Row className='show-grid'>
                    <Col xs={12}>
                        <h2>Norwood</h2>
                        <p>Back in highschool I played guitar and sang for this group.</p>
                        <p><a href='https://norwood.bandcamp.com/'>Check out our bandcamp!</a></p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Projects;
