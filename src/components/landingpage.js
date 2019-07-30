import React from 'react';
import { Component, Button } from 'react';
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
                            <h1>
                                Chase 
                            </h1>
                            <p>
                                Lead Product Designer at Betfluent.
                            </p>
                            <p>
                                View my past experiences here! 
                            </p>
                        </div>
                        <div className="button-container">
                            <button>
                                hi
                            </button>
                        </div>
                    </Cell>
                    <Cell col={12}>
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>
                                HTML/CASS/React/Python?ETC ALL THAT CRAP
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
    margin: "auto"
}


export default LandingPage; 