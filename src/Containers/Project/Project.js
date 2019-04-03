import React, { Component } from 'react';
import DetailsHeader from '../../Components/DetailsHeader/DetailsHeader'
import DetailsBody from "../../Components/DetailsBody/DetailsBody";
import "./Project.scss"


class Project extends Component {



    render() {
        return (
            <div className={"project-page"}>
                <DetailsHeader title={"Projets"}/>
                <DetailsBody isProject={true}/>
            </div>

        );
    }
}


export default Project;
