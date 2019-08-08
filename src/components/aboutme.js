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
                                Front-End Product Designer with years of 
                                experience in design, capable of crafting 
                                beautiful and realistic products. Currently, 
                                I operate as Lead Product Designer for 
                                Betfluent, and my past experiences include 
                                Motion Designer for the New York Football 
                                Giants, and Assistant Producer for ESPN+.
                            </p>
                        </div>
                    </Cell>
                    <Cell col={12}>

                        {/* first row */}
                        <div className="container-body">
                            <div className="container-columns">
                                <div class="box">
                                    {/* Characteristic #1 */}
                                    <h2>1</h2>
                                    <h3>Versatile</h3>
                                    <p>
                                        My passion in both Design & 
                                        Development has taught me many 
                                        amazing platforms, tools, and
                                        talents.
                                    </p>
                                    <div className="char-button-container">
                                        <a href="/" rel="noopener noreferrer" target="_black">
                                            <span></span>
                                            <span></span>
                                            <div>
                                                <text> VIEW MY SKILLS </text>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="box">
                                    <h2>2</h2>
                                    <h3>Accountable</h3>
                                    <p>
                                        My understanding in the many disciplines 
                                        of development allow me to produce & 
                                        enhance projects, complete hard  
                                        deadlines, and manage others. 
                                    </p>
                                </div>
                                <div class="box">
                                    <h2>3</h2>
                                    <h3>Contact</h3>
                                    <div className="contact-icon">
                                        <i class="fa fa-envelope" aria-hidden="true" />
                                    </div>
                                    <p>
                                        chaseahn4@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Cell>
                    <Cell col={6} offsetDesktop={3}>
                        <div className="guide-container">
                            <a href="/">
                                    <i class="fa fa-envelope" aria-hidden="true" />
                                </a>
                            <h1>
                                chaseahn@gmail.com
                            </h1>
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
