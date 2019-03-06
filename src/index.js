import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Containers/Home/Home';
import * as serviceWorker from './serviceWorker';
import './Assets/common.scss';
import {BrowserRouter, Route, Router} from "react-router-dom";
import AppRoute from "./AppRoute";
import Project from "./Containers/Project/Project";


// ReactDOM.render(<Home/>, document.getElementById('root'));
ReactDOM.render((
    <BrowserRouter>
        <AppRoute/>
    </BrowserRouter> ),
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
