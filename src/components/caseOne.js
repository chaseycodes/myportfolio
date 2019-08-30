import React from 'react';
import { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import bfRD from '../images/bfrd.png';
import oldBF from '../images/oldbf.png';
import other from '../images/others.png';
import color from '../images/color.png';
import fonts from '../images/fonts.png';
import example from '../images/example.png';

class CaseOne extends Component {
    render() {
        return(
            <div style={styleSheet} >
                <Grid>

                    {/* Experience */}
                    <Cell col={6} offsetDesktop={3}>
                        <div className="home-button">
                            <div className="circle-links">
                                <ul><li>
                                    <a href="/projects">
                                        <i class="fa fa-reply" aria-hidden="true" />
                                    </a>
                                </li></ul>
                            </div>
                        </div>
                        <div className="guide-container">
                            <img 
                                src={bfRD}
                                alt="betfluent"
                                className="case-image"
                            />
                            <h2>
                                Betfluent Redesign
                            </h2>
                            <p>
                                Upon joining the Betfluent team, I was tasked 
                                with creating a more inviting and user-friendly
                                platform. Although the software itself was stable,
                                the product severely lacked quality user experience
                                and intuitive design.  
                            </p>
                            <img 
                                src={oldBF}
                                alt="betfluent"
                                className="case-image"
                            />
                            <p>
                                As you can see from a glance, a user would really
                                have to try and understand what's going on, 
                                the opposite of what good, intuitive design can 
                                accomplish. They say it takes only 
                                1/10th of a second to form a first impression, 
                                and most users will probably be saying: <i>What 
                                in the world is Betfluent?</i> 
                            </p>
                            <p>
                                Betfluent is an online sports gambling social 
                                network that aims to educate novice users on making 
                                smart, informed decisions with their money. At it's
                                core, some explaining is required because the 
                                industry is relatively new. Thus, explaining how
                                the platform works in a banner is not the issue, it's
                                just not done in an ideal fashion. 
                            </p>
                            <p>
                                <b>The Problem:</b> Confusing and inconsistent UI Design
                                leads to poor and difficult user experience. < br />
                                <b>The Solution:</b> Style redesign 
                                to create a more <i>consistent</i> and <i>recognizable </i>
                                identity. 
                            </p>
                            <h3>
                                <i>Determining What's Right</i>
                            </h3>
                            <img 
                                src={other}
                                alt="betfluent"
                                className="case-image"
                            />
                            <p>
                                When creating a new style it's important to look
                                at your neighbors. DraftKings and Fanduel are 
                                Green and Blue, respectively, therefore I chose 
                                Purple as the main color identity for Betfluent 
                                to differentiate ourselves from the competition. 
                                Not only is it unique but purple also conveys 
                                fantasy, wealth, and originality, all qualities
                                that directly apply to Betfluent. Pictured below
                                is the color palette I came up with:
                            </p>
                            <img 
                                src={color}
                                alt="betfluent"
                                className="case-image"
                            />
                            <p>
                                After determining the color, it's was time to pick
                                a font. Typography, similar to colors, convey 
                                emotions and tones making it an crucial decision 
                                as your choice will be visible on every point of 
                                the product. 
                            </p>
                            <img 
                                src={fonts}
                                alt="betfluent"
                                className="case-image"
                            />
                            <p>
                                My goal was to find a balance of serious, casual,
                                yet friendly and jovial. I believe the combination 
                                of Monserrat Alternates and Avenir achieve that 
                                combination. <b>Put together:</b> 
                            </p>
                            <img 
                                src={example}
                                alt="betfluent"
                                className="case-image"
                            />
                            <p>
                                Looking awesome!
                            </p>
                            <h3>
                                <i>Putting the Pieces Together</i>
                            </h3>
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

export default CaseOne; 
