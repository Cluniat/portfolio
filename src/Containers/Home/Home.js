import React, { Component } from 'react';
import './Home.scss';
import Header from "../../Components/Header/Header";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {

  render() {
    library.add(faMapMarkerAlt);
    library.add(faPhone);
    library.add(faEnvelope);
    library.add(faGithub);
    library.add(faLinkedin);
    return (
      <Header ></Header>
    );
  }
}

export default Home;
