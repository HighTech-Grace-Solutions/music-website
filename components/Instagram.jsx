'use-strict';

import React from 'react';
import Instafeed from 'instafeed.js';

export default class Instagram extends React.Component {

    componentDidMount() {

        new Instafeed({
            get: 'user',
            userId: '939099016',
            accessToken: '',
            resolution: 'standard_resolution',
            limit: '4',
            template: '<a href="{{link}}"><img style="height:auto; width:50%;" src="{{image}}"></a>'
        }).run();
    }

    render() {

        return (
            <div id="instafeed"></div>
        );
    }
}
