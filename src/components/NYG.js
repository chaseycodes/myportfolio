import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, Button, CardActions} from 'react-mdl';
import { Link } from 'react-router-dom';

import Background from '../images/giantsbg.png';

class NYG extends Component {
    render() {
        return (
            <div style={styleSheet}>
                <Grid className="giants-container">
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
                            <h1>
                                Giants
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
                            <img 
                                src={Background}
                                alt="profile"
                                className="profile-image"
                            />
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

const styleSheet = {
    width: "100%",
    margin: "auto",
    backgroundImage: `url(${Background})`,
    backgroundRepeat  : 'no-repeat',
    backgroundSize: 'cover'

}

export default NYG;