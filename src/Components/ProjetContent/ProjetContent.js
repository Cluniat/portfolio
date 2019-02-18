import React, { Component } from 'react';
import './ProjetContent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class ProjetContent extends Component {

    render() {
        return (
            <div className={"projet"}>
                <div className={"name-technos"}>
                    <div className={"project-name"}>Video Game</div>
                    <div className={"pipe"}/>
                    <div className={"technos"}>VueJS Git Trello</div>
                </div>
                <div className={"project-description"}>Web page in which you can search and display video games</div>
                <div className={"more"}>
                    <FontAwesomeIcon icon={"ellipsis-h"}/>
                </div>
            </div>
        );

    }
}


export default ProjetContent;
