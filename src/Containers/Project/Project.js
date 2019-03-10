import React, { Component } from 'react';
import ProjectHeader from '../../Components/ProjectHeader/ProjectHeader'
import Carousel from "../../Components/Carousel/Carousel";



class Project extends Component {



    render() {
        return (
            <div>
                <ProjectHeader/>
                <Carousel/>
            </div>

        );
    }
}


export default Project;
