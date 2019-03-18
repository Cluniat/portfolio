import React, { Component } from 'react';
import Carousel from "../../Components/Carousel/Carousel";
import "./ProjectBody.scss";



class ProjectBody extends Component {



    render() {
        return (
            <div className={"project-body"}>
                <div className={"carousel"}> <Carousel/> </div>
            </div>

        );
    }
}


export default ProjectBody;
