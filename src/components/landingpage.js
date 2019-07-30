import React from 'react';
import { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from '../images/avatar.png';

class LandingPage extends Component {
    render() {
        return(
            <div style={styleSheet} >
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={Avatar}
                            alt="avatar"
                            className="avatar-image"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>
                                HTML/CASS/React/Python?ETC ALL THAT CRAP
                            </p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://linkedin.com/in/chaseahn" rel="noopener noreferrer" target="_blank">
                                    <i class="fab fa-linkedin" />
                                </a>

                                {/* Github */}
                                <a href="https://linkedin.com/in/chaseahn" rel="noopener noreferrer" target="_blank">
                                    <i class="fab fa-github" aria-hidden="true" />
                                </a>

                                {/* Dribble */}
                                <a href="https://linkedin.com/in/chaseahn" rel="noopener noreferrer" target="_blank">
                                    <i class="fab fa-dribbble" aria-hidden="true" />
                                </a>
        
                            </div>
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


export default LandingPage; 