'use-strict';

import React from 'react';
import { Nav } from 'react-bootstrap';

const style = {
  color: '#fff',
  marginRight: '6px'
}

export default class NavItemScroll extends React.Component {

    getTop() {

        const top = {
            box: document.getElementById(this.props.id).getBoundingClientRect().top,
            scroll: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
            client: document.documentElement.clientTop || document.body.clientTop || 0
        };

        return Math.round(top.box + top.scroll - top.client);
    }

    scrollToTop() {

        const top = this.getTop();
        window.scrollTo(0, top);
    }

    render() {

        return (

            <Nav.Link onClick={() => this.scrollToTop()} style={style}>
                {this.props.name}
            </Nav.Link>
        );
    }
}
