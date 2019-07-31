import React from 'react';
import { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
import ProfilePicture from '../images/profile-alt.png';

class AboutMe extends Component {
    render() {
        return(
            <div style={styleSheet} >
                <Grid className="aboutme-grid">

                    {/* PROFILE BIO */}
                    <Cell col={6} offsetDesktop={3}>
                        <div className="guide-container">
                            <img 
                                src={ProfilePicture}
                                alt="profile"
                                className="profile-image"
                            />
                            <h1>
                                Hello, I'm Chase!
                            </h1>
                            <p>
                                Full-Stack Product Designer with years of experience in design, capable of crafting beautiful and realistic products. 
                                Currently I am operating as Lead Product Designer for Betfluent, but my past experiences include Motion Designer for the New York Football Giants, and Assistant Producer for ESPN+.
                            </p>
                        </div>
                    </Cell>
                
                </Grid>
            </div>
        )
    }
}

const styleSheet = {
    width: "100%",
    margin: "auto"
}

export default AboutMe; 
