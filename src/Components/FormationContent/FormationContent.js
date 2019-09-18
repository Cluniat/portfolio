import React, { Component } from 'react';
import './FormationContent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class FormationContent extends Component {

    render() {
        return (
            <div className={"formation-content"}>
                <div className={"formation"}>
                    <div className={"year"}>2019 / 2020</div>
                    <div className={"pipe"}/>
                    <div className={"details"}>
                        <div className={"description"}>5<sup>ème</sup> année d'école d'ingénieur, spécialité informatique</div>
                        <div className={"place"}>
                            <FontAwesomeIcon className={"font-awesome"} icon="map-marker-alt"/>
                            <div className={"place-name"}>Polytech Lyon</div>
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


export default FormationContent;
