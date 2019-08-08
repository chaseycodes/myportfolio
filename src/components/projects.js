
import React from 'react';
import { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, Button, CardActions} from 'react-mdl';

class Projects extends Component {
    render() {
        return(
            <div style={styleSheet} >
                <Grid className="white-grid">
                <Cell col={8} offsetDesktop={2} style={{display: 'flex'}}>

                {/* #1 */}
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.rantsports.com/fantasy/files/2015/07/Odell-Beckham-Bend-It-Like-Beckham-Jr-Copy.jpg) bottom left 5% no-repeat #46B6AC'}}>New York Giants</CardTitle>
                    <CardText>
                        My work with the New York Football Giants.
                    </CardText>
                    <CardActions border>
                        <Button colored>View</Button>
                    </CardActions>
                </Card>

                {/* #2 */}
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>View Updates</Button>
                    </CardActions>
                </Card>

                {/* #3 */}
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Betfluent - Deposit</CardTitle>
                    <CardText>
                        Building trust with UX/UI on deposit page.
                    </CardText>
                    <CardActions border>
                        <Button colored>View Updates</Button>
                    </CardActions>
                </Card>

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