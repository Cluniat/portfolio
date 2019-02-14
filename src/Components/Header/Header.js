import React, { Component } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../../Assets/images/philippine-cluniat.png";


class Header extends Component {

    render() {
        return (
            <div className="header">

                <div className={"identity"}>
                    <div className={"photo"}>Ceci est une photo</div>
                    <img src={logo} alt={"Philippine Cluniat"} height={"100"} width={"300"}/>
                </div>

                <div className={"info"}>
                    <div className={"line"}>
                        <FontAwesomeIcon className={"font-awesome"} icon="map-marker-alt"/>
                        <div className="text">56 rue Dedieu 69100 Villeurbanne</div>
                    </div>
                    <div className={"line"}>
                        <FontAwesomeIcon className={"font-awesome"} icon="phone"/>
                        <div className="text">06 28 20 81 46</div>
                    </div>
                    <div className={"line"}>
                        <FontAwesomeIcon className={"font-awesome"} icon="envelope"/>
                        <div className="text">philippine.cluniat@gmail.com</div>
                    </div>
                    <a className={"line"} href={"https://github.com/Cluniat"} target={"_blank"}>
                        <FontAwesomeIcon className={"font-awesome"} icon={['fab', 'github']}/>
                        <div className="text">CLUNIAT</div>
                    </a>
                    <a className={"line"} href={"https://www.linkedin.com/in/philippine-cluniat-39ab0b158/"} target={"_blank"}>
                        <FontAwesomeIcon className={"font-awesome"} icon={['fab', 'linkedin']}/>
                        <div className="text">Philippine Cluniat</div>
                    </a>
                </div>

                <div className={"icons"}>
                    <i className={"icon-world"}/>
                    <i className={"icon-tennis-raquet-and-ball"}/>
                    <i className={"icon-books-stack-of-three"}/>
                </div>


            </div>
        );
    }

}

export default Header;
