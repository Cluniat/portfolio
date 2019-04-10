import React, { Component } from 'react';
import "./BackButton.scss"
import {library} from '@fortawesome/fontawesome-svg-core';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Tab from "../../Containers/Home/Home";
import {Link} from "react-router-dom";


class BackButton extends Component {

    constructor(props) {
        super(props);
        this.state = {isLogo: true};
    }


    render() {
        library.add(faArrowLeft);
        return (
            <Link to={"/"} className={"back-arrow"}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
        );
    }
}

export default BackButton;
