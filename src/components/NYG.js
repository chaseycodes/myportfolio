import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, Button, CardActions} from 'react-mdl';
import { Link } from 'react-router-dom';
import InstagramEmbed from 'react-instagram-embed';
 

import Background from '../images/giantsbg.png';

class NYG extends Component {
    render() {
        return (
            <div style={styleSheet}>
                <Grid>
                    <div className="home-button">
                        <div className="circle-links">
                            <ul><li>
                                <a href="/">
                                    <i class="fa fa-home" aria-hidden="true" />
                                </a>
                            </li></ul>
                        </div>
                    </div>
                    <Cell col={12} offsetDesktop={1}></Cell>
                    <Cell col={4} offsetDesktop={1}>
                        <div className="guide-container-left">
                            <h3>NEW YORK FOOTBALL</h3>
                            <h1>Giants</h1>
                            <p>
                                While collorating with a wonderfully talented 
                                team, I operated as a Motion Designer, Video 
                                Editor, Audio Engineer, and Producer. Our 
                                speciality and focus was on producing content 
                                for all social media sites and television 
                                networks, stadium gameday graphics , and 
                                sponsership promotion. I held lead design on 
                                several mini web series, such as Social Buzz.
                            </p>
                        </div>
                    </Cell>
                    <Cell col={12} offsetDesktop={1}>
                        <div className="instagram-embed">
                            <InstagramEmbed
                                url='https://www.instagram.com/p/BlV0YvVnBaY/'
                                maxWidth={320}
                                hideCaption={false}
                                containerTagName='div'
                                protocol=''
                                injectScript
                                onLoading={() => {}}
                                onSuccess={() => {}}
                                onAfterRender={() => {}}
                                onFailure={() => {}}
                                className="instagram-embed"
                                />
                            <InstagramEmbed
                                url='https://www.instagram.com/p/BlV0YvVnBaY/'
                                maxWidth={320}
                                hideCaption={false}
                                containerTagName='div'
                                protocol=''
                                injectScript
                                onLoading={() => {}}
                                onSuccess={() => {}}
                                onAfterRender={() => {}}
                                onFailure={() => {}}
                                className="instagram-embed"
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