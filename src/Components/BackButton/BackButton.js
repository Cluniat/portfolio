import React from 'react';
import "./BackButton.scss"
import {library} from '@fortawesome/fontawesome-svg-core';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";


const BackButton = () => {
    library.add(faArrowLeft);

    return (
        <Link to={"/"} className={"back-arrow"}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
    )
}

export default BackButton;
