import React  from 'react';
import './FormationContent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useSelector} from 'react-redux';
import {Utils} from '../../Utils'


const FormationContent = () => {

    const lastEducation = useSelector(state => state.educations.lastEducation);

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
    }

    return (
        (lastEducation && !lastEducation.loading) ?
            <div className={"formation-content"}>
                <div className={"formation"}>
                    <div className={"year"}>{lastEducation.data.start} / {lastEducation.data.end}</div>
                    <div className={"pipe"}/>
                    <div className={"details"}>
                        {_renderDescription(lastEducation.data.description)}
                        <div className={"place"}>
                            <FontAwesomeIcon className={"font-awesome"} icon="map-marker-alt"/>
                            <div className={"place-name"}>{Utils.capitalizeSentence(lastEducation.data.place)}</div>
                        </div>
                    </div>
                </div>
                <div className={"more"}>
                    <FontAwesomeIcon icon={"ellipsis-h"}/>
                </div>
            </div>
            : null
    );
}

export default FormationContent;
