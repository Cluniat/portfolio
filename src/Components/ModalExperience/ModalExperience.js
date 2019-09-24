import React, { Component } from 'react';
import './ModalExperience.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ExperienceActions from "../../Store/Experience/actions";
import {connect} from "react-redux";
import {Utils} from "../../Utils";


class ModalExperience extends Component {

    componentDidMount() {
        this.props.getExperiences()
    }

    render() {
        return (
            (this.props.experiences && !this.props.experiences.loading) ?
                <div className={"modal-experience"}>
                        <div className={"block"}>
                            {this.props.experiences.data.map((experience, index) => (
                            <div className={"experience"}>
                                <div className={"year"}>{experience.date}</div>
                                <div className={"pipe"}/>
                                <div className={"details"}>
                                    <div className={"description"}>{Utils.capitalize(experience.description)}</div>
                                    <div className={"place"}>
                                        <FontAwesomeIcon className={"font-awesome"} icon="map-marker-alt"/>
                                        <div className={"place-name"}>{experience.company} {Utils.capitalize(experience.place)}</div>
                                    </div>
                                </div>
                            </div>
                            ))};
                        </div>
                        <div className={"block"}>
                            {this.props.experiences.data.map((experience, index) => (
                            <div className={"experience"}>
                                <div className={"dots"}>
                                    <FontAwesomeIcon icon={"ellipsis-h"}/>
                                    <FontAwesomeIcon icon={"ellipsis-h"}/>
                                </div>
                                <div className={"cpt"}>
                                    {
                                        experience.skills.map((skill, index) =>
                                            <span key={'skill-'+index}> {skill.toUpperCase()} </span>
                                        )}
                                </div>
                            </div>
                                ))};
                        </div>
                </div>
                : null

        )}

}

const mapStateToProps = state => ({
    experiences: state.experiences.experiences,
});

const mapDispatchToProps = dispatch => ({
    getExperiences: () => dispatch(ExperienceActions.allExperiences())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalExperience);

