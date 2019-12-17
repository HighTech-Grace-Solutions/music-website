'use-strict';

import React from 'react';
import { NavItem } from 'react-bootstrap';

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

            <NavItem eventKey={this.props.eventKey} onClick={() => this.scrollToTop()}>{this.props.name}</NavItem>
        );
    }
}
