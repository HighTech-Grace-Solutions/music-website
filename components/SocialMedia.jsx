'use-strict';

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Twitter from './Twitter.jsx';

const MediaOutlet = {
    facebook: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdonisvitchmusic&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
};

const style = {
    border: '0',
    overflow: 'hidden',
    width: '100%',
    height: '350px'
};

export default class SocialMedia extends React.Component {

    render() {

        return (

            <Grid id='social'>
                <Row>
                    <Col xs={12} sm={12}>
                        <h1>Social</h1>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h3><span className='fa fa-facebook'></span></h3>
                        <iframe src={MediaOutlet.facebook} style={style} frameBorder='0' allowtransparency='true'></iframe>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h3><span className='fa fa-twitter'></span></h3>
                        <Twitter />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
