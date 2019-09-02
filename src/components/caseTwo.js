import React from 'react';
import { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import depositnew from '../images/depositnew.gif';
import depositOriginal from '../images/deposit-original.png';

class CaseTwo extends Component {
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
                        <div className="case-img-container">
                            {/* <img 
                                src={deposit}
                                alt="betfluent"
                                className="case-image"
                            /> */}
                            <div class="box"></div>
                        </div>
                        <div className="guide-container">
                            <h2>Building Trust on Deposits</h2>
                            <p>
                                One my earliest tasks with Betfluent was 
                                to redesign the deposit page. Back-end analytics 
                                showed that the average user spent a total average 
                                of around 6 seconds before deciding <i>not</i> to 
                                deposit funds into their account. As expected, users 
                                that were directed to the page following a promotional
                                campaign or advertisement were more likely to deposit.
                            </p>
                            <img 
                                src={depositOriginal}
                                alt="betfluent"
                                className="case-image"
                            />
                            <p>
                                As you can see, the original deposit page's UI design barely existed.
                                Where was my money going to? What about standard
                                verifications that my money is secure? Is this really all that 
                                you're willing to show me? Why? A lack of information 
                                creates inherent skepticism. Honestly, my first reaction 
                                was that I would not deposit either and I understood
                                why the data showed the information that it did. 
                            </p>
                            <p>
                                <b>The Problem:</b> Poor UI deseign led to lack 
                                of interaction and confidence in users resulting 
                                in a poor visit to deposit ratio. < br />
                                <b>The Solution:</b> Create a better page design
                                that shows efforts and information that any future
                                deposits are safe and secure. 
                            </p>
                            <h3>Graphics and Interaction</h3>
                            <p>
                                Two standard practices for enhancing UI are adding
                                graphics and interaction. Graphics will display a 
                                theme and interactions enchance user experience based 
                                using research to predict behavior. 
                            </p>
                            <img 
                                src={depositnew}
                                alt="betfluent"
                                className="case-image"
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
    margin: "auto",
    background: "white"
}

export default CaseTwo; 
