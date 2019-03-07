import React, { Component } from 'react';
import ProjectHeader from '../../Components/ProjectHeader/ProjectHeader'
import InfoProject from "../../Components/InfoProject/InfoProject";



class Project extends Component {



    render() {
        return (
            <div>
                <ProjectHeader/>
                <InfoProject
                    title={"Video Game"}
                    description={"Site web permettant l'affichage et la recherche de jeux vidéos depuis une API. Développé en VueJS 2 (visuels, gestion de projet)"}
                    technos={"VueJS Axios VueX Git Trello"}/>
            </div>

        );
    }
}


export default Project;
