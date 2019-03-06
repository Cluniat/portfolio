import React, { Component } from 'react';
import './ProjectHeader.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../../Assets/images/philippine-cluniat.png";


class ProjectHeader extends Component {

    render() {
        return (
            <div className="project-header">

                <img className={"logo"} src={logo} alt={"Philippine Cluniat"}/>

                <div className={"title"}>
                    PROJETS
                </div>

                <div className={"icons"}>
                    <i className={"icon icon-world"}/>
                    <i className={"icon icon-tennis-raquet-and-ball"}/>
                    <i className={"icon icon-books-stack-of-three"}/>
                </div>


            </div>
        );
    }

}

export default ProjectHeader;
