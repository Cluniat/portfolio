import React from 'react';
import Carousel from "../../Components/Carousel/Carousel";
import "./DetailsBody.scss";
import PropTypes from "prop-types";



const DetailsBody = ({isProject, isLogo, isPoster}) => (
    <div className={"project-body"}>
        <div className={"carousel"}>
            <Carousel isProject={isProject} isLogo={isLogo} isPoster={isPoster}/>
        </div>
    </div>

);

DetailsBody.propTypes = {
    isProject: PropTypes.bool,
    isLogo: PropTypes.bool,
    isPoster: PropTypes.bool,
};

DetailsBody.defaultProps = {
    isProject: false,
    isLogo: false,
    isPoster: false,
}

export default DetailsBody;
