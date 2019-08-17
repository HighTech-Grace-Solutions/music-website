'use-strict';

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const style = {
    background: 'rgba(0,0,0,0.5)'
};

export default class About extends React.Component {

    render() {

        return (

            <Grid id='about'>
                <h1>About / Bio</h1>
                <Row className='show-grid' style={style}>
                    <Col xs={12} sm={6}>
                        <h3>
                            Where it all started...
                        </h3>
                        <h5>
                            <p>
                                It all started in the attic of a gambrel style home on Norwood Street in Deering Center - Portland, Maine.
                            </p>
                            <p>
                                The first project was loosely named Second Letter. All because we all had the same second letter in our names, seriously.
                                We consisted of Sam Monaco (Drums), Nash Aatlo (Bass), and myself attempting to play guitar and sing in early
                                puberty, (sorry). We then evolved into The Holiday Hams, later on -- we finally settled on the band name Norwood.
                            </p>
                            <p>
                                Norwood was successful in churning up some original tunes and evolving some throughout the years.
                                Due to our age and inexperience, it was a uphill battle scheduling any shows outside of Deering High School,
                                or the few all ages venues in Portland at the time. We did our best to get shows and made it to the Maine Highschool Rockoff Finals as
                                a three piece, where Nash won Best Bassist. We learned alot from the experience and continued to build off the momentum.
                            </p>
                            <p>
                                Later, Nash decided to move onto more punk rock pastures and Norwood became a four piece, by adding Patrick Russell (Bass)
                                and Jake Regier (Guitar). We didn't skip a beat and made it to the finals again the next year --
                                this time Jake went on to win Best Guitarist. Although I did receive an Honerable Mention for my Songwriting skills,
                                in all honesty; I was and still am, more interested in making the musicians around me better.
                                It is the individual success of the musicians that continues to make me most proud.
                            </p>
                            <p>
                                Sam Monaco lives in New York and plays in some rocking drums for really awesome bands in the city, way to go Sam!
                            </p>
                            <p>
                                After highschool, I played few stints in some local projects such as Fifth Freedom, Casco Fiasco and many unnamed projects.
                                Nothing was quite the right fit and as I moved onto college my focus was learning science and math, not so much on starting a band.
                            </p>
                        </h5>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h3>Where that took me...</h3>
                        <h5>
                            <p>
                                After graduating college, I was determined to finally release some form of music on a physical medium, you know; something other than just a few songs on a myspace.
                                The switch to acoustic stuff may have come as a shock to some, as I dove pretty deep into the depths of heavy rock and metal during my late teens.
                                Without a serious band together, it just felt right to play create and atleast attempt to put out something meaningful.
                            </p>
                            <p>
                                Leaving all of my older material at the door -- I worked on writing acoustic specific tracks that could be expanded upon.
                                I continued to play a good deal of open mics, small acoustic shows, and slowly built a 5 track EP -- that I stupidly named
                                Runaway. The album was recorded with Jayson Whitmore @ Penumbra Recordings. It was just the two of us for most of the sessions.
                                I vividly remember how very humbling it also how unsure I was of many textures and bass lines.
                                Much of the instrumentals were improvisation -- which was possible thanks to the patience of the engineer and my infinite stubborn-ness.
                                Although I wish I had a drummer and a full band - I contined to try to positively make music that I could support solo and enjoyed playing.
                              </p>
                            <p>
                                The release show was booked at a bar close to my heart, called Slainte. It was probably my favorite show; as
                                so much time went into getting just that far  my grandmother stayed past midnight. I continued to play some shows around town,
                                at The Local Buzz, Slainte, and Flask Lounge. The conclusion would keep coming to, was that; I love making music.
                                I told myself if I can't find other like minded people to make music with, I would continue to play and write music solo. Easier said than done!
                            </p>
                            <p>
                                After 2014, my focus has been to find like minded creative musicians, who are passionate and into experimental jams.
                                It wasn't because I didn't enjoy being a singer-songwriter, as I am still very open to playing acoustic,
                                I just wanted the challenge of creating some project from scratch. Not even create, allow to organically come togther
                                with completely fresh content and views of how to approach the creative process.
                            </p>
                        </h5>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
