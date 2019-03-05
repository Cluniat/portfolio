import React, { Component } from 'react';
import './ModalCompetence.scss';
import vuejs from "../../Assets/images/vuejs.png";
import reactjs from "../../Assets/images/reactjs.png";
import angular from "../../Assets/images/angular.png";
import java from "../../Assets/images/java.png";
import laravel from "../../Assets/images/laravel.png";
import netcore from "../../Assets/images/aspnetcore.png";
import git from "../../Assets/images/git.png";
import sass from "../../Assets/images/sass.png";
import html from "../../Assets/images/html.png";
import css from "../../Assets/images/css.png";
import js from "../../Assets/images/js.png";
import php from "../../Assets/images/php.png";

class ModalCompetence extends Component {

    render() {
        return (

            <div className={"modal-competence"}>
                <img className={"icon"} src={vuejs} alt={"vuejs"} height={"10%"} width={"10%"}/>
                <img className={"icon"} src={reactjs} alt={"reactjs"} height={"10%"} width={"10%"}/>
                <img className={"icon"} src={angular} alt={"angular"} height={"10%"} width={"10%"}/>
                <img className={"icon"} src={java} alt={"java"} height={"5%"} width={"5%"}/>
                <img className={"icon"} src={laravel} alt={"laravel"} height={"15%"} width={"15%"}/>
                <img className={"icon"} src={netcore} alt={"netcore"} height={"10%"} width={"10%"}/>
                <img className={"icon"} src={php} alt={"php"} height={"10%"} width={"10%"}/>
                <img className={"icon"} src={git} alt={"git"} height={"10%"} width={"10%"}/>
                <img className={"icon"} src={sass} alt={"sass"} height={"10%"} width={"10%"}/>
                <img className={"icon"} src={html} alt={"html"} height={"10%"} width={"10%"}/>
                <img className={"icon"} src={css} alt={"css"} height={"10%"} width={"10%"}/>
                <img className={"icon"} src={js} alt={"js"} height={"10%"} width={"10%"}/>
            </div>
        );

    }

}

export default ModalCompetence;
