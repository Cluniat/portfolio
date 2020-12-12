import React, {useEffect, useCallback} from 'react';
import './ModalExperience.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ExperienceTypes} from "../../Store/Experience/actions";
import {useDispatch, useSelector} from "react-redux";
import {Utils} from "../../Utils";


const ModalExperience = () => {

    const dispatch = useDispatch();
    const getExperiences = useCallback(
        () => dispatch({type: ExperienceTypes.ALL_EXPERIENCES}),
        [dispatch]
    )
    const experiences = useSelector(state => state.experiences.experiences);

    useEffect(() => {
        getExperiences();
    }, [])


    return (
        (experiences && !experiences.loading) ?
            <div className={"modal-experience"}>
                    <div className={"block"}>
                        {experiences.data.map((experience, index) => (
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
                        {experiences.data.map((experience, index) => (
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
    )

}

export default ModalExperience;

