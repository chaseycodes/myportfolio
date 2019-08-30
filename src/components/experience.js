import React from 'react';
import { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProfilePicture from '../images/profile-alt.png';

class AboutMe extends Component {
    render() {
        return(
            <div style={styleSheet} >
                <Grid className="white-grid">

                    {/* Experience */}
                    <Cell col={6} offsetDesktop={3}>
                        <div className="home-button">
                            <div className="circle-links">
                                <ul><li>
                                    <a href="/">
                                        <i class="fa fa-home" aria-hidden="true" />
                                    </a>
                                </li></ul>
                            </div>
                        </div>

                        <div className="guide-container">
                            <img 
                                src={ProfilePicture}
                                alt="profile"
                                className="profile-image"
                            />
                            <h1>
                                Work Experience
                            </h1>
                            <p>
                                adwdwadwa
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
