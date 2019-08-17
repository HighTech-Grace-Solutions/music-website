'use-strict';

import React from 'react';

export default class Twitter extends React.Component {

    render() {

        window.twttr = (
            function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0], t = window.twttr || {};
                if (d.getElementById(id)){ return t; }
                    js = d.createElement(s); js.id = id;
                    js.src = 'https://platform.twitter.com/widgets.js';
                    fjs.parentNode.insertBefore(js, fjs);
                    t._e = []; t.ready = function(f) {
                        t._e.push(f);
                };
                return t;
            }(document, 'script', 'twitter-wjs')
        );

        return (

            <a  href='https://twitter.com/jareddonisvitch'
                className='twitter-timeline'
                data-show-count='false'
                data-show-screen-name='false'
                data-height='350px'
                data-theme='dark'
            >
            </a>
        );
    }
}
