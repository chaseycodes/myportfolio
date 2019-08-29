import React from 'react';
import { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
import Avatar from '../images/avatar.png';
import DancingPanda from '../images/panda.gif';

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

                        <div className="banner-text">
                            <h1>
                                Chase Ahn
                            </h1>
                            <p>
                                Lead Product Designer at Betfluent
                            </p>
                        </div>

                        {/* About */}
                        <div className="button-container">
                            <a href="/aboutme" rel="noopener noreferrer">
                                <span></span>
                                <span></span>
                                <div className="green">
                                    <i class="fa  fa-user-circle" aria-hidden="true" />
                                    <text> About me </text>
                                    <i class="fa  fa-user-circle" aria-hidden="true" />
                                </div>
                            </a>
                        </div>

                        {/* Github */}
                        <div className="button-container">
                            <a href="https://www.github.com/chaseahn" rel="noopener noreferrer" target="_black">
                                <span></span>
                                <span></span>
                                <div className="black">
                                    <i class="fa fa-github" aria-hidden="true" />
                                    <text> github </text>
                                    <i class="fa fa-github" aria-hidden="true" />
                                </div>
                            </a>
                        </div>

                        {/* Dribbble */}
                        <div className="button-container">
                            <a href="https://www.dribbble.com/chaseahn" rel="noopener noreferrer" target="_black">
                                <span></span>
                                <span></span>
                                <div className="orange">
                                    <i class="fa fa-dribbble" aria-hidden="true" />
                                    <text> Dribbble </text>
                                    <i class="fa fa-dribbble" aria-hidden="true" />
                                </div>
                            </a>
                        </div>

                        {/* LinkedIn */}
                        <div className="button-container">
                            <a href="https://www.linkedin.com/in/chaseahn" rel="noopener noreferrer" target="_black">
                                <span></span>
                                <span></span>
                                <div className="blue">
                                    <i class="fa fa-linkedin-square" aria-hidden="true" />
                                    <text> Linkedin </text>
                                    <i class="fa fa-linkedin-square" aria-hidden="true" />
                                </div>
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
                        <div className="circle-links">
                            <ul>

                                <li><a href="/projects" target="_blank"><i class="fa fa-file-code-o" aria-hidden="true" /></a>
                                <text className="text-adjust">Projects</text></li>

                                <li><a href="/" target="_blank"><i class="fa fa-pencil" aria-hidden="true" /></a>
                                <text className="text-adjust">Resume</text></li>

                                <li><a href="/contact" target="_blank"><i class="fa fa-envelope" aria-hidden="true" /></a>
                                <text>Contact</text></li>

                            </ul>
                        </div>
                    </Cell>

                    <Cell col={12}>
                        <div className="bottom-panda">
                            {/* Avatar */}
                            <img 
                                src={DancingPanda}
                                alt="dancing-panda"
                                className="panda-image"
                            />
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