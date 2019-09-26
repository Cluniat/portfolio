import React, { Component } from 'react';
import './ExperienceContent.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux';
import {Utils} from '../../Utils';


class ExperienceContent extends Component {


    render() {
        return (
            (this.props.lastExperience && !this.props.lastExperience.loading) ?
            <div className={"experience-content"}>
                <div className={"experience"}>
                    <div className={"year"}>{this.props.lastExperience.data.date}</div>
                    <div className={"pipe"}/>
                    <div className={"details"}>
                        <div className={"poste"}>{Utils.capitalize(this.props.lastExperience.data.description)}</div>
                        <div className={"place"}>
                            <FontAwesomeIcon className={"font-awesome"} icon="map-marker-alt"/>
                            <div className={"place-name"}>{this.props.lastExperience.data.company} {Utils.capitalize(this.props.lastExperience.data.place)}</div>
                        </div>
                    </div>
                    <div className={"dots"}>
                        <FontAwesomeIcon icon={"ellipsis-h"}/>
                        <FontAwesomeIcon icon={"ellipsis-h"}/>
                        <FontAwesomeIcon icon={"ellipsis-h"}/>
                    </div>
                    <div className={"cpt"}>
                    {
                        this.props.lastExperience.data.skills.map((skill, index) =>
                            <span key={'skill-'+index}> {skill.toUpperCase()} </span>
                        )}
                    </div>

                </div>
                <div className={"more"}>
                    <FontAwesomeIcon icon={"ellipsis-h"}/>
                </div>
            </div>
                : null
        );

    }
}


const mapStateToProps = state => ({
    lastExperience: state.experiences.lastExperience,
});

export default connect(
    mapStateToProps,
    null
)(ExperienceContent);
