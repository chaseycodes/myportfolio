import React from 'react';
import { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProfilePicture from '../images/profile-alt.png';

class AboutMe extends Component {
    render() {
        return(
            <div style={styleSheet} >
                <Grid className="white-grid">

                    {/* PROFILE BIO */}
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
                                Hello, I'm Chase!
                            </h1>
                            <p>
                                Full-Stack Product Designer with <b>3+ years</b> of 
                                experience in design, full-stack graduate of Byte 
                                Academy, and Northeastern Alum. Currently, 
                                I operate as <b>Lead Product Designer</b> for 
                                Betfluent, and my past experiences include 
                                Motion Designer for the New York Football 
                                Giants, and Assistant Producer for ESPN+.  
                                <b> If you want to talk</b>, I am best available at my email: 
                                <b> contact@ahn.dev</b>.
                            </p>
                        </div>
                    </Cell>
                    <Cell col={12}>
                        <div className="guide-container">
                            <div className="aboutme-button">
                                <a href="/projects"><span>Projects</span></a>
                            </div>
                            <div className="aboutme-button">
                                <a href="/resume"><span>Resume</span></a>
                            </div>
                            <div className="aboutme-button">
                                <a href="/contact"><span>Contact</span></a>
                            </div>
                        </div>
                    </Cell>
                    <Cell col={12}>

                        {/* first row */}
                        <div className="container-body">
                            <div className="container-columns">
                                <div class="box">
                                    {/* Characteristic #1 */}
                                    <h2>1</h2>
                                    <h3>Design</h3>

                                    <div className="char-button-container">
                                        <a rel="noopener noreferrer">
                                            <span></span>
                                            <span></span>
                                            <div>
                                                <text> XD </text>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="char-button-container">
                                        <a rel="noopener noreferrer">
                                            <span></span>
                                            <span></span>
                                            <div>
                                                <text> Photoshop </text>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="char-button-container">
                                        <a rel="noopener noreferrer">
                                            <span></span>
                                            <span></span>
                                            <div>
                                                <text> Sketch </text>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="char-button-container">
                                        <a rel="noopener noreferrer">
                                            <span></span>
                                            <span></span>
                                            <div>
                                                <text> Aftereffects </text>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="char-button-container">
                                        <a rel="noopener noreferrer">
                                            <span></span>
                                            <span></span>
                                            <div>
                                                <text> Illustrator </text>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="char-button-container">
                                        <a rel="noopener noreferrer">
                                            <span></span>
                                            <span></span>
                                            <div>
                                                <text> Premerie Pro </text>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div class="box">
                                    <h2>2</h2>
                                    <h3>Development</h3>

                                    <div className="char-button-container">
                                        <a rel="noopener noreferrer">
                                            <span></span>
                                            <span></span>
                                            <div>
                                                <text> JavaScript </text>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="char-button-container">
                                        <a rel="noopener noreferrer">
                                            <span></span>
                                            <span></span>
                                            <div>
                                                <text> Python </text>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="char-button-container">
                                        <a rel="noopener noreferrer">
                                            <span></span>
                                            <span></span>
                                            <div>
                                                <text> HTML / CSS </text>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="char-button-container">
                                        <a rel="noopener noreferrer">
                                            <span></span>
                                            <span></span>
                                            <div>
                                                <text> React </text>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="char-button-container">
                                        <a rel="noopener noreferrer">
                                            <span></span>
                                            <span></span>
                                            <div>
                                                <text> React Native </text>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="char-button-container">
                                        <a rel="noopener noreferrer">
                                            <span></span>
                                            <span></span>
                                            <div>
                                                <text> Flask </text>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="box">
                                    <h2>3</h2>
                                    <h3>Skills</h3>
                                    <p>
                                    <b>Design:</b> UX vision • UI graphics • Strategy presentations • User flows • Wireframes & mock ups • Motion design • Style guides & component libraries < br />
                                    <b>Prototyping:</b> Interactive flow with HTML/CSS/JS • Frameworks & APIs < br />
                                    <b>Research:</b> Data analysis (Pandas, NumPy) • Task management • A/B Testing & Experiment
                                    </p>
                                </div>
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

export default AboutMe; 
