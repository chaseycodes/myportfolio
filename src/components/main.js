import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Projects from './projects';
import NYG from './NYG';
import CaseOne from './caseOne';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/betfluent-redesign" component={CaseOne} />
        <Route path="/nyg" component={NYG} />
    </Switch>
);

export default Main;
