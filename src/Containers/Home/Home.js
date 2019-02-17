import React, { Component } from 'react';
import './Home.scss';
import Header from "../../Components/Header/Header";
import FormationContent from "../../Components/FormationContent/FormationContent";
import Tab from "../../Components/Tab/Tab";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {

  render() {
    library.add(faMapMarkerAlt,faPhone, faEnvelope, faGithub, faLinkedin);
    return (
        <div>
          <Header/>
          <Tab title={"Formation"}>
            <FormationContent/>
          </Tab>
          <Tab title={"Projets"} />
          <Tab title={"Compétences"} />
          <Tab title={"Expériences professionnelles"} />
        </div>
    );
  }
}

export default Home;
