import React from 'react';
import { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import bfRD from '../images/bfrd.png';
import oldBF from '../images/oldbf.png';

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
