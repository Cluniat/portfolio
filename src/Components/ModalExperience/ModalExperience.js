import React, { Component } from 'react';
import './ModalExperience.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class ModalExperience extends Component {

    render() {
        return (
            <div className={"modal-experience"}>
                <div className={"block"}>
                    <div className={"experience"}>
                        <div className={"year"}>2018 / 2019</div>
                        <div className={"pipe"}/>
                        <div className={"details"}>
                            <div className={"description"}>Stage développement web</div>
                            <div className={"place"}>
                                <FontAwesomeIcon className={"font-awesome"} icon="map-marker-alt"/>
                                <div className={"place-name"}>ApolloSSC Lyon</div>
                            </div>
                        </div>
                    </div>
                    <div className={"experience"}>
                        <div className={"year"}>2018 / 2019</div>
                        <div className={"pipe"}/>
                        <div className={"details"}>
                            <div className={"description"}>Designer</div>
                            <div className={"place"}>
                                <FontAwesomeIcon className={"font-awesome"} icon="map-marker-alt"/>
                                <div className={"place-name"}>BDE Polytech Lyon</div>
                            </div>
                        </div>
                    </div>
                    <div className={"experience"}>
                        <div className={"year"}>été 2017</div>
                        <div className={"pipe"}/>
                        <div className={"details"}>
                            <div className={"description"}>Serveuse dans un bar-restaurant</div>
                            <div className={"place"}>
                                <FontAwesomeIcon className={"font-awesome"} icon="map-marker-alt"/>
                                <div className={"place-name"}>Camping du lac d'Aydat</div>
                            </div>
                        </div>
                    </div>
                    <div className={"experience"}>
                        <div className={"year"}>2013 / 2015</div>
                        <div className={"pipe"}/>
                        <div className={"details"}>
                            <div className={"description"}>Educatrice de tennis</div>
                            <div className={"place"}>
                                <FontAwesomeIcon className={"font-awesome"} icon="map-marker-alt"/>
                                <div className={"place-name"}>Tennis club Ussel</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"block"}>
                    <div className={"experience"}>
                        <div className={"dots"}>
                            <FontAwesomeIcon icon={"ellipsis-h"}/>
                            <FontAwesomeIcon icon={"ellipsis-h"}/>
                        </div>
                        <div className={"cpt"}>
                            ANGULAR 7  ASP.NET CORE
                        </div>
                    </div>
                    <div className={"experience"}>
                        <div className={"dots"}>
                            <FontAwesomeIcon icon={"ellipsis-h"}/>
                            <FontAwesomeIcon icon={"ellipsis-h"}/>
                        </div>
                        <div className={"cpt"}>
                            PHOTOSHOP  VIE ASSOCIATIVE
                        </div>
                    </div>
                    <div className={"experience"}>
                        <div className={"dots"}>
                            <FontAwesomeIcon icon={"ellipsis-h"}/>
                            <FontAwesomeIcon icon={"ellipsis-h"}/>
                        </div>
                        <div className={"cpt"}>
                            AUTONOMIE  PRISE DE DECISION
                        </div>
                    </div>
                    <div className={"experience"}>
                        <div className={"dots"}>
                            <FontAwesomeIcon icon={"ellipsis-h"}/>
                            <FontAwesomeIcon icon={"ellipsis-h"}/>
                        </div>
                        <div className={"cpt"}>
                            ORGANISATION  GESTION GROUPE
                        </div>
                    </div>

                </div>
            </div>
        );

    }

}


export default ModalExperience;
