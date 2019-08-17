'use-strict';

import React from 'react';
import Instafeed from 'instafeed.js';

export default class Instagram extends React.Component {

    componentDidMount() {

        new Instafeed({
            get: 'user',
            userId: '939099016',
            accessToken: '939099016.1677ed0.e152668a825f4fcf9df8557f4bdf9f99',
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
