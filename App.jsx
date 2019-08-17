'use-strict';

import React from 'react';
import Navigation from './components/Navigation.jsx';
import Container from './components/Container.jsx';
import Footer from './components/Footer.jsx';

class App extends React.Component {

    render(){

        return (

            <div>
                <Navigation />
                <Container />
                <Footer />
            </div>
        );
    }
}

export default App;
