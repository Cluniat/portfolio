import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import Home from './Containers/Home/Home';
import Project from './Containers/Project/Project';


class AppRoute extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/project"} component={Project}/>
            </Switch>

        );
    }
}

export default AppRoute;


