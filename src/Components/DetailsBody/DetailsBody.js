import React, { Component } from 'react';
import Carousel from "../../Components/Carousel/Carousel";
import "./DetailsBody.scss";
import PropTypes from "prop-types";



class DetailsBody extends Component {


    render() {
        console.log("isProject", this.props.isProject)
        console.log("isLogo", this.props.isLogo)
        console.log("isPoster", this.props.isPoster)
        return (
            <div className={"project-body"}>
                <div className={"carousel"}>
                    <Carousel isProject={this.props.isProject} isLogo={this.props.isLogo} isPoster={this.props.isPoster}/>
                </div>
            </div>

        );
    }
}

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
