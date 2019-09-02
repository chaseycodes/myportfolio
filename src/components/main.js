import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Projects from './projects';
import NYG from './NYG';
import CaseOne from './caseOne';
import CaseTwo from './caseTwo';
import Resume from './document';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/betfluent-redesign" component={CaseOne} />
        <Route path="/betfluent-deposit" component={CaseTwo} />
        <Route path="/nyg" component={NYG} />
        <Route path="/resume" component={Resume} />
    </Switch>
);

export default Main;
