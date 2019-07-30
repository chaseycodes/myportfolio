import React from 'react';
import { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
import Avatar from '../images/avatar.png';

class LandingPage extends Component {
    render() {
        return(
            <div style={styleSheet} >
                <Grid className="landing-grid">
                    <Cell col={12}>

                        {/* Avatar */}
                        <img 
                            src={Avatar}
                            alt="avatar"
                            className="avatar-image"
                        />

                        {/* Description */}
                        <div className="banner-text">
                            <h1>
                                Chase 
                            </h1>
                            <p>
                                Lead Product Designer at Betfluent
                            </p>
                            <p>
                                Click here to learn more about me  
                            </p>
                        </div>

                        {/* Github */}
                        <div className="button-container">
                            <a href="/aboutme" rel="noopener noreferrer" target="_black">
                                <span></span>
                                <span></span>
                                <i class="fa fa-github" aria-hidden="true" />
                                <text> github </text>
                                <i class="fa fa-github" aria-hidden="true" />
                            </a>
                        </div>

                        {/* Dribbble */}
                        <div className="button-container">
                            <a href="/aboutme" rel="noopener noreferrer" target="_black">
                                <span></span>
                                <span></span>
                                <i class="fa fa-dribbble" aria-hidden="true" />
                                <text> Dribbble </text>
                                <i class="fa fa-dribbble" aria-hidden="true" />
                            </a>
                        </div>

                        {/* LinkedIn */}
                        <div className="button-container">
                            <a href="/aboutme" rel="noopener noreferrer" target="_black">
                                <span></span>
                                <span></span>
                                <i class="fa fa-linkedin-square" aria-hidden="true" />
                                <text> Linkedin </text>
                                <i class="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                        </div>
                    </Cell>

                    {/* Break */}
                    <Cell col={12}>
                        <div className="banner-text">
                            <hr/>
                        </div>
                    </Cell>

                    <Cell col={12}>

                        <div className="general-links">
                            <a href="/">
                                <div className="card">
                                    <div>
                                        <i class="fa fa-linkedin-square" aria-hidden="true" />
                                    </div>
                                    <text> Linkedin </text>
                                </div>
                            </a>
                            <div className="card">
                                hi
                            </div>
                            <div className="card">
                                hi
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