import React from 'react';
import { Component } from 'react';
import { Grid, Cell, Button} from 'react-mdl';
import { Link } from 'react-router-dom';
import ProfilePicture from '../images/profile-alt.png';

class AboutMe extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {

        return(
            <div style={styleSheet} >
                <Grid className="white-grid">

                    {/* PROFILE BIO */}
                    <Cell col={6} offsetDesktop={3}>
                    
                        <Link to="/" className="link">
                        <div className="home-button">
                            <div className="circle-links">
                                <ul><li>
                                    <a href="#">
                                        <i class="fa fa-home" aria-hidden="true" />
                                    </a>
                                </li></ul>
                            </div>
                        </div>
                        </Link>

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
                                <b> If you want to talk</b>, I am best available at my email: <a href="mailto:contact@ahn.dev"><b>contact@ahn.dev</b></a>.
                            </p>
                        </div>
                    </Cell>
                    <Cell col={12}>
                        <div className="guide-container">

                            <div className="aboutme-button">
                                <Link to="/resume" className="link">
                                <span>Resume</span>
                                </Link>
                            </div>

                            
                            <div className="aboutme-button">
                                <Link to="/projects" className="link">
                                <span>Projects</span>
                                </Link>
                            </div>

                            {/* <Link to="/resume" className="link">
                            <div className="aboutme-button">
                                <a href="#"><span>Resume</span></a>
                            </div>
                            </Link>

                            <Link to="/projects" className="link">
                            <div className="aboutme-button">
                                <a href="#"><span>Projects</span></a>
                            </div>
                            </Link> */}

                            <div className="aboutme-button">
                                <div className="aboutme-button-fa">
                                    <a href="https://www.github.com/chaseahn" rel="noopener noreferrer" target="_black"><span>
                                    <i class="fa fa-github" aria-hidden="true" />
                                    </span></a>
                                </div>
                                <div className="aboutme-button-fa">
                                    <a href="https://www.linkedin.com/in/chaseahn" rel="noopener noreferrer" target="_black"><span>
                                    <i class="fa fa-linkedin" aria-hidden="true" />
                                    </span></a>
                                </div>
                                <div className="aboutme-button-fa">
                                    <a href="https://www.dribbble.com/chaseahn" rel="noopener noreferrer" target="_black"><span>
                                    <i class="fa fa-dribbble" aria-hidden="true" />
                                    </span></a>
                                </div>
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
                                    <div className="char-button-container">
                                        <a rel="noopener noreferrer">
                                            <span></span>
                                            <span></span>
                                            <div>
                                                <text> UX/UI DESIGN </text>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="char-button-container">
                                        <a rel="noopener noreferrer">
                                            <span></span>
                                            <span></span>
                                            <div>
                                                <text> WireFrames </text>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="char-button-container">
                                        <a rel="noopener noreferrer">
                                            <span></span>
                                            <span></span>
                                            <div>
                                                <text> Prototypes </text>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="char-button-container">
                                        <a rel="noopener noreferrer">
                                            <span></span>
                                            <span></span>
                                            <div>
                                                <text> Motion Design </text>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="char-button-container">
                                        <a rel="noopener noreferrer">
                                            <span></span>
                                            <span></span>
                                            <div>
                                                <text> Data Analysis </text>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="char-button-container">
                                        <a rel="noopener noreferrer">
                                            <span></span>
                                            <span></span>
                                            <div>
                                                <text> Webscraping </text>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="padding">
                             
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

const styleSheet = {
    width: "100%",
    margin: "auto",
    background: "white"
}

export default AboutMe; 
