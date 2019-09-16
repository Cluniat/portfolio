import React, { Component } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../../Assets/images/philippine-cluniat.png";
import photo from "../../Assets/images/photo-philippine-cluniat.jpg";


class Header extends Component {

    render() {
        return (
            <div className="header">

                <div className={"identity"}>
                    <div className={"photo-cover"}>
                        <div className={"photo-border"}></div>
                        <img className={"photo"} src={photo} alt={"Philippine Cluniat"}/>
                    </div>
                </div>

                <div className={"info"}>
                    <div className={"line"}>
                        <img className={"logo"} src={logo} alt={"Philippine Cluniat"}/>
                    </div>
                    <div className={"line"}>
                        <FontAwesomeIcon className={"font-awesome"} icon="map-marker-alt"/>
                        <div className="text">LYON</div>
                    </div>
                    <div className={"line"}>
                        <FontAwesomeIcon className={"font-awesome"} icon="envelope"/>
                        <div className="text">philippine.cluniat@gmail.com</div>
                    </div>
                    <a className={"line"} href={"https://github.com/Cluniat"} target={"_blank"} rel= {"noopener noreferrer"}>
                        <FontAwesomeIcon className={"font-awesome"} icon={['fab', 'github']}/>
                        <div className="text">CLUNIAT</div>
                    </a>
                    <a className={"line"} href={"https://www.linkedin.com/in/philippine-cluniat-39ab0b158/"} target={"_blank"} rel= {"noopener noreferrer"}>
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
