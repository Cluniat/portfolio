import React, { Component } from 'react';
import ProjectHeader from '../../Components/ProjectHeader/ProjectHeader'
import ProjectBody from "../../Components/ProjectBody/ProjectBody";


class Project extends Component {



    render() {
        return (
            <div>
                <ProjectHeader/>
                <ProjectBody/>
            </div>

        );
    }
}


export default Project;
