import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Extras from './extras';
import Projects from './projects';
import Experience from './experience';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/extras" component={Extras} />
        <Route path="/projects" component={Projects} />
        <Route path="/experience" component={Experience} />

    </Switch>
)

export default Main;