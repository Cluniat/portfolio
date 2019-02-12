import React, { Component } from 'react';
import './Header.scss';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">

                <div className={"identity"}>
                    <div className={"photo"}>Ceci est une photo</div>
                    <div className={"entire-name"}>
                        <div className={'surname'}>Philippine</div>
                        <div className={'name'}>Cluniat</div>
                    </div>
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

Header.propTypes = {}


export default Header;
