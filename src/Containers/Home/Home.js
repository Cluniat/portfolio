import React, { Component } from 'react';
import './Home.scss';
import Header from "../../Components/Header/Header";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

class Home extends Component {

  render() {
    library.add(faMapMarkerAlt);
    return (
      <Header ></Header>
    );
  }
}

export default Home;
