import React, { Component } from 'react';
import './Home.scss';
import Header from "../../Components/Header/Header";
import FormationContent from "../../Components/FormationContent/FormationContent";
import ProjetContent from "../../Components/ProjetContent/ProjetContent";
import Tab from "../../Components/Tab/Tab";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import CompetenceContent from "../../Components/CompetenceContent/CompetenceContent";

class Home extends Component {

  render() {
    library.add(faMapMarkerAlt,faPhone, faEnvelope, faGithub, faLinkedin, faEllipsisH);
    return (
        <div>
          <Header/>
          <Tab title={"Formation"}>
            <FormationContent/>
          </Tab>
            <Tab title={"Projets"}>
                <ProjetContent/>
            </Tab>
            <Tab title={"Compétences"}>
                <CompetenceContent/>
            </Tab>
          <Tab title={"Expériences professionnelles"} />
        </div>
    );
  }
}

export default Home;
