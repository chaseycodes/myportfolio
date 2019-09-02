import React from 'react';
import { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import resume from '../images/resume.png';

class Resume extends Component {
    render() {
        return(
            <div style={styleSheet} >
                <Grid>

                    {/* Experience */}
                    <Cell col={12}>
                        <div className="home-button">
                            <div className="circle-links">
                                <ul><li>
                                    <a href="/aboutme">
                                        <i class="fa fa-reply" aria-hidden="true" />
                                    </a>
                                </li></ul>
                            </div>
                        </div>
                        <div className="guide-container">
                            <img 
                                src={resume}
                                alt="betfluent"
                                className="resume"
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

export default Resume; 