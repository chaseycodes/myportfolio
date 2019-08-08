
import React from 'react';
import { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, Button, CardActions} from 'react-mdl';
import { Link } from 'react-router-dom';

class Projects extends Component {
    render() {
        return(
            <div style={styleSheet} >
                <Grid className="white-grid">

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
                            Projects
                        </h1>
                    </div>
                </Cell>

                <Cell col={12}>
                <div className="project-container-body">
                <div className="project-container-columns">
                {/* #1 */}
                <Card shadow={0} className="project-box">
                    <CardTitle expand style={{color: '#fff', background: 'url(https://imagesvc.timeincapp.com/v3/fan/image?url=https://gmenhq.com/wp-content/blogs.dir/31/files/2016/01/odell-beckham-nfl-dallas-cowboys-new-york-giants.jpg&c=sc&w=850&h=566) bottom left 5% no-repeat #46B6AC'}}>New York Football Giants</CardTitle>
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
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Venture Kicks</CardTitle>
                    <CardText>
                        Sneaker Management App - Flask/Python.
                    </CardText>
                    <CardActions border>
                        <Button colored><Link to="http://www.venturekicks.com" target="_blank">Demo</Link></Button>
                        <Button colored><Link to="https://www.github.com" target="_blank">Source</Link></Button>
                    </CardActions>
                </Card>

                {/* #3 */}
                <Card shadow={0} className="project-box">
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Betfluent - Deposit</CardTitle>
                    <CardText>
                        Building trust with UX/UI on deposit page.
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