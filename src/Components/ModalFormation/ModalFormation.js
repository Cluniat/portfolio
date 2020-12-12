import React, {useEffect, useCallback} from 'react';
import './ModalFormation.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {EducationTypes} from "../../Store/Education/actions";
import {useDispatch, useSelector} from "react-redux";
import {Utils} from "../../Utils";


const ModalFormation = () => {

    const dispatch = useDispatch();
    const getEducations = useCallback(
        () => dispatch({type: EducationTypes.ALL_EDUCATIONS}),
        [dispatch]
    )
    const educations = useSelector(state => state.educations.educations);

    useEffect(() => {
        getEducations();
    }, [])

    const _renderDescription = (content) => {
        const sup = 'ème';
        if(content.includes(sup)){
            let split = content.split(sup)
            return (
                <div className={"description"}>
                    {
                        split.map((item, index, tab) => (
                            <span key={index}>
                                {index !== tab.length - 1 ? (<span>{item}<sup>éme</sup></span>) : <span>{item}</span> }
                            </span>
                        ))
                    }
                </div>
            )
        }
        else {
            return (
                <div className={"description"}>
                    {content}
                </div>
            )
        }

    }



    return (
        (educations && !educations.loading) ?
         educations.data.map((education, index) => (
             <div className={"modal-formation"} key={`education-${index}`}>
                 <div className={"formation"}>
                     <div className={"year"}>{education.start} / {education.end}</div>
                     <div className={"pipe"}/>
                     <div className={"details"}>
                         {_renderDescription(education.description)}
                         <div className={"place"}>
                             <FontAwesomeIcon className={"font-awesome"} icon="map-marker-alt"/>
                             <div className={"place-name"}>{Utils.capitalizeSentence(education.place)}</div>
                         </div>
                     </div>
                 </div>
             </div>
            ))
            : null
    );

}

export default ModalFormation;
