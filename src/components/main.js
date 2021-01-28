import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Extras from './extras';
import Projects from './projects';
import Experience from './experience';


const Main = () => (
    <Switch>
        <Route exact path="/portfolio/" component={LandingPage} />
        <Route exact path="/portfolio/aboutme" component={AboutMe} />
        <Route exact path="/portfolio/extras" component={Extras} />
        <Route exact path="/portfolio/projects" component={Projects} />
        <Route exact path="/portfolio/experience" component={Experience} />

    </Switch>
)

export default Main;