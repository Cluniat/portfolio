import React, { Component } from 'react';
import './ExperienceContent.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class ExperienceContent extends Component {

    render() {
        return (
            <div className={"experience-content"}>
                <div className={"experience"}>
                    <div className={"year"}>2018 / 2019</div>
                    <div className={"pipe"}/>
                    <div className={"details"}>
                        <div className={"poste"}>Designer</div>
                        <div className={"place"}>
                            <FontAwesomeIcon className={"font-awesome"} icon="map-marker-alt"/>
                            <div className={"place-name"}>BDE Polytech Lyon</div>
                        </div>
                    </div>
                </div>
                <div className={"more"}>
                    <FontAwesomeIcon icon={"ellipsis-h"}/>
                </div>
            </div>
        );

    }
}


export default ExperienceContent;
