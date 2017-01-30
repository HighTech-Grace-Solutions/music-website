'use-strict';

import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

class About extends React.Component {
  render() {
    return (
      <Grid id='about'>
        <h1>About / Bio</h1>
        <Row className='show-grid'>
          <Col xs={12} sm={6}>
            <h3>
              Where it all started...
            </h3>
            <h5>
              <p>
                It all started on Norwood Street in Deering Center - Portland, Maine.
              </p>
              <p>
                The first project was loosely named Second Letter. All because we all had the same second letter in our names, seriously.
                We consisted of Sam Monaco (Drums), Nash Aatlo (Bass), and myself attempting to play guitar and sing in early
                puberty, (sorry). We later evolved into The Holiday Hams, later on -- we finally settled on the band name Norwood.
              </p>
              <p>
                Norwood was successful in churning up some original tunes and evolving throughout the years.
                Due to our age and inexperience, it was a uphill battle scheduling any shows outside of Deering High School,
                or the few all ages venues in Portland at the time. We did place in the Maine Highschool Rockoff Finals as
                a (3) piece, where Nash won Best Bassist.
              </p>
              <p>
                Later, Nash moved onto more punk rock pastures and Norwood
                became a (4) piece, by adding Patrick Russell (Bass) and Jake Regier (Guitar). We didn't skip a beat and we made finals again the next year --
                Jake even went on to win Best Guitarist at this event. Although I did receive an Honerable Mention for my Songwriting skills,
                in all honesty; I was and still am, more interested in making the musicians around me better.
                It is the individual success of the musicians that continues to make me most proud.
              </p>
              <p>
                Sam Monaco lives in New York and plays in some rocking drums for really awesome bands in the city, way to go Sam!
              </p>
              <p>
                After highschool, I played few stints in some local projects but my goal was all or nothing. College it was.
              </p>
            </h5>
          </Col>
          <Col xs={12} sm={6}>
            <h3>Currently...</h3>
            <h5>
              <p>
                After graduating college, I was determined to finally release some form of music on a physical medium, you know; something other than just a few songs on a myspace.
                The switch to acoustic stuff may have come as a shock to some, as I dove pretty deep into the depths of heavy rock and metal during my late teens.
                Without a serious band together, it just felt right to play create and atleast attempt to put out something meaningful.
              </p>
              <p>
                Leaving all of my older material at the door, I worked on writing acoustic specific tracks that could be expanded upon.
                At this time I was playing a good deal of open mics, small acoustic shows, and slowly built a 5 track EP -- that I stupidly named
                Runaway. The album was recorded with Jayson Whitmore @ Penumbra Recordings. It was just the two of us for most of the sessions,
                I treasured the experience and vividly remember how very humbled I was after realizing how rusty and unsure of many of the textures and bass lines.
                Much of the instrumentation was improvisation in the studio, which was possible thanks to the patience of the engineer and my stubbornness.
                Although I wish I had a drummer and a full band - I contined to try and make music that I could support solo and enjoyed playing.
                The release show was booked at a bar close to my heart, called Slainte. It was an outstanding show from my perspective -
                so much time went into getting just that far and my grandmother stayed until almost midnight. I continued to play some shows around town,
                at The Local Buzz, Slainte, and Flask Lounge. The conclusion I kept coming to was that I love making music,
                so if I can't find other like minded people to do so with, I would continue to play and write music solo.
              </p>
              <p>
                After 2014, my focus has been to find like minded creative musicians, who are passionate and into experimental jams.
                It wasn't because I didn't enjoy being a singer-songwriter, as I am still very open to playing acoustic,
                I just wanted the challenge of creating some project from scratch. Not even create, allow to organically come togther
                with completely fresh content and views of how the creative process should work.
              </p>
            </h5>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default About;
