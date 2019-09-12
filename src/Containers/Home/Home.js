import React, {Component} from 'react';
import './Home.scss';
import Header from "../../Components/Header/Header";
import FormationContent from "../../Components/FormationContent/FormationContent";
import ProjetContent from "../../Components/ProjetContent/ProjetContent";
import Tab from "../../Components/Tab/Tab";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import CompetenceContent from "../../Components/CompetenceContent/CompetenceContent";
import ExperienceContent from "../../Components/ExperienceContent/ExperienceContent";
import {Link} from "react-router-dom";
import DesignContent from "../../Components/DesignContent/DesignContent";

class Home extends Component {

    render() {
        library.add(fas, fab)
        return (
            <div>
                <Header/>
                <Tab title={"Formation"} isFormation={true}>
                    <FormationContent/>
                </Tab>
                <Link to={"/project"}>
                    <Tab title={"Projets"} hasModal={false}>
                        <ProjetContent/>
                    </Tab>
                </Link>
                <Tab title={"Compétences"} isCompetence={true}>
                    <CompetenceContent/>
                </Tab>
                <Tab title={"Expériences"} isExperience={true}>
                    <ExperienceContent/>
                </Tab>
                <Link to={"/design"}>
                    <Tab title={"Designs"} hasModal={false}>
                        <DesignContent/>
                    </Tab>
                </Link>
            </div>
        );
    }
}

export default Home;
