import React from 'react';
import './ProjetContent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useSelector} from 'react-redux';

const ProjetContent = () => {
    const lastProject = useSelector(state => state.projects.lastProject);

    return (
        (lastProject && !lastProject.loading) ?
            <div className={"projet"}>
                <div className={"name-technos"}>
                    <div className={"project-name"}>{lastProject.data.name}</div>
                    <div className={"pipe"}/>
                    <div className={"technos"}>
                        {
                            lastProject.data.technos.map((techno, index) =>
                                <span key={'techno-' + index}> {techno.toUpperCase()} </span>
                            )}
                    </div>
                </div>
                <div className={"project-description"}>{lastProject.data.description}</div>
                <div className={"more"}>
                    <FontAwesomeIcon icon={"ellipsis-h"}/>
                </div>
            </div> : null
    )
};

export default ProjetContent;
