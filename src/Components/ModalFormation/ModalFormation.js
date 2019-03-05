import React, { Component } from 'react';
import './ModalFormation.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class ModalFormation extends Component {

    render() {
        return (
            <div className={"modal-formation"}>
                <div className={"formation"}>
                    <div className={"year"}>2018 / 2019</div>
                    <div className={"pipe"}/>
                    <div className={"details"}>
                        <div className={"description"}>4<sup>ème</sup> année d'école d'ingénieur, spécialité informatique</div>
                        <div className={"place"}>
                            <FontAwesomeIcon className={"font-awesome"} icon="map-marker-alt"/>
                            <div className={"place-name"}>Polytech Lyon</div>
                        </div>
                    </div>
                </div>
                <div className={"formation"}>
                    <div className={"year"}>2017 / 2018</div>
                    <div className={"pipe"}/>
                    <div className={"details"}>
                        <div className={"description"}>3<sup>ème</sup> année d'école d'ingénieur, spécialité informatique</div>
                        <div className={"place"}>
                            <FontAwesomeIcon className={"font-awesome"} icon="map-marker-alt"/>
                            <div className={"place-name"}>Polytech Lyon</div>
                        </div>
                    </div>
                </div>
                <div className={"formation"}>
                    <div className={"year"}>2016 / 2017</div>
                    <div className={"pipe"}/>
                    <div className={"details"}>
                        <div className={"description"}>2<sup>ème</sup> année de cycle préparatoire aux écoles d'ingénieurs</div>
                        <div className={"place"}>
                            <FontAwesomeIcon className={"font-awesome"} icon="map-marker-alt"/>
                            <div className={"place-name"}>Polytech Clermont-Ferrand</div>
                        </div>
                    </div>
                </div>
                <div className={"formation"}>
                    <div className={"year"}>2014 / 2016</div>
                    <div className={"pipe"}/>
                    <div className={"details"}>
                        <div className={"description"}>PACES (Première Année Commune aux Etudes de Santé)</div>
                        <div className={"place"}>
                            <FontAwesomeIcon className={"font-awesome"} icon="map-marker-alt"/>
                            <div className={"place-name"}>Faculté de médecine Clermont-Ferrand</div>
                        </div>
                    </div>
                </div>
                <div className={"formation"}>
                    <div className={"year"}>2013 / 2014</div>
                    <div className={"pipe"}/>
                    <div className={"details"}>
                        <div className={"description"}>Baccalauréat scientifique, mention Très Bien</div>
                        <div className={"place"}>
                            <FontAwesomeIcon className={"font-awesome"} icon="map-marker-alt"/>
                            <div className={"place-name"}>Lycée Bernart de Ventadour Ussel</div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}


export default ModalFormation;
