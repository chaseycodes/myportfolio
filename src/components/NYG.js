import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, Button, CardActions} from 'react-mdl';
import { Link } from 'react-router-dom';
import InstagramEmbed from 'react-instagram-embed';

import eli from '../images/eli.png';
 

class NYG extends Component {
    render() {
        return (
            <div style={styleSheet}>
                <Grid>
                    <div className="eli">
                        <img 
                            src={eli}
                            alt="betfluent"
                            className="case-image"
                        />
                    </div>

                    <Link to="/projects" className="link">
                    <div className="home-button">
                        <div className="circle-links">
                            <ul><li>
                                <a href="#">
                                    <i class="fa fa-reply" aria-hidden="true" />
                                </a>
                            </li></ul>
                        </div>
                    </div>
                    </Link>
                    
                    <Cell col={12} offsetDesktop={1}></Cell>
                    <Cell col={4} offsetDesktop={4}>
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
                    <Cell col={12}>
                        <div className="ig-body">
                            <div className="ig-columns">
                                <div>
                                    <InstagramEmbed
                                url='https://www.instagram.com/p/BqBJyv5Ay95/'
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
                                <div>
                                <InstagramEmbed
                                url='https://www.instagram.com/p/BpasWlPgutF/'
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
                                <div>
                                <InstagramEmbed
                                url='https://www.instagram.com/p/BlWnmhnl-th/'
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
                            </div>
                        </div>
                    </Cell>
                    <Cell col={12}>
                        <div className="ig-body">
                            <div className="ig-columns">
                                <div>
                                    <InstagramEmbed
                                url='https://www.instagram.com/p/BmPE-0TnV1Y/'
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
                                <div>
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
                                <div>
                                <InstagramEmbed
                                url='https://www.instagram.com/p/BiFyzJMnl-a/'
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
                            </div>
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
    background: 'linear-gradient(to right bottom, #0f0c29, #0575E6)',
    backgroundRepeat  : 'no-repeat',
    backgroundSize: 'cover'
 

}

export default NYG;