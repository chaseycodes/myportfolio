
import React from 'react';
import { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, Button, CardActions} from 'react-mdl';
import { Link } from 'react-router-dom';

import Giants from '../images/Giants.png';
import Video from '../images/videoediting.jpg';
import Dribbble from '../images/dribbble.jpg';
import Trust from '../images/trust.png';
import Sneakers from '../images/sneakers.jpg';
import Redesign from '../images/redesign.png';


class Projects extends Component {
    render() {
        return(
            <div style={styleSheet} >
                <Grid>
                <div className="home-button">
                        <div className="circle-links">
                            <ul><li>
                                <a href="/aboutme">
                                    <i class="fa fa-reply" aria-hidden="true" />
                                </a>
                            </li></ul>
                        </div>
                </div>

                <Cell col={12}>
                    <div className="guide-container">
                        <h1 className="text-shadow">
                            Projects
                        </h1>
                    </div>
                </Cell>

                <Cell col={12}>
                <div className="project-container-body">
                <div className="project-container-columns">
                {/* #1 */}
                <Card shadow={0} className="project-box">
                    <CardTitle expand style={{color: '#fff', background: `url(${Giants})`}}>New York Giants</CardTitle>
                    <CardText>
                        My work with the New York Football Giants.
                    </CardText>
                    <CardActions border>
                        <Button colored>
                        <Link to="/nyg">View</Link></Button>
                    </CardActions>
                </Card>

                {/* #2 */}
                <Card shadow={0} className="project-box">
                    <CardTitle expand style={{color: '#fff', background: `url(${Redesign})`}}>Betfluent - Redesign</CardTitle>
                    <CardText>
                        Creating a new identity for Betfluent.
                    </CardText>
                    <CardActions border>
                        <Button colored>
                        <Link to="/betfluent-redesign">View Case Study</Link></Button>
                    </CardActions>
                </Card>

                {/* #3 */}
                <Card shadow={0} className="project-box">
                    <CardTitle expand style={{color: '#fff', background: `url(${Trust})`}}>Betfluent - Deposit</CardTitle>
                    <CardText>
                        Building trust with UX/UI on deposit page.
                    </CardText>
                    <CardActions border>
                        <Button colored><Link to="/betfluent-deposit">View Case Study</Link></Button>
                    </CardActions>
                </Card>

                </div>
                </div>

                </Cell>
                <Cell col={12}>
                <div className="project-container-body">
                <div className="project-container-columns">
                {/* #1 */}
                <Card shadow={0} className="project-box">
                    <CardTitle expand style={{color: '#fff', background:  `url(${Sneakers})`}}>Venture Kicks</CardTitle>
                    <CardText>
                        Sneaker Management App - Flask/Python.
                    </CardText>
                    <CardActions border>
                        <Button colored><Link to="http://www.venturekicks.com" target="_blank">Demo</Link></Button>
                        <Button colored><Link to="https://www.github.com" target="_blank">Source</Link></Button>
                    </CardActions>
                </Card>

                {/* #2 */}
                <Card shadow={0} className="project-box">
                    <CardTitle expand style={{color: '#fff', background: `url(${Video})`}}>Vimeo</CardTitle>
                    <CardText>
                        My work as an editor and motion designer.
                    </CardText>
                    <CardActions border>
                        <Button colored><Link to="http://www.vimeo.com/chaseahn" target="_blank">View</Link></Button>
                    </CardActions>
                </Card>

                {/* #3 */}
                <Card shadow={0} className="project-box">
                    <CardTitle expand style={{color: '#fff', background: `url(${Dribbble})`}}>Dribbble</CardTitle>
                    <CardText>
                        Dribble UI Concepts.
                    </CardText>
                    <CardActions border>
                        <Button colored><Link to="/trust-with-deposit">View</Link></Button>
                    </CardActions>
                </Card>

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

export default Projects; 