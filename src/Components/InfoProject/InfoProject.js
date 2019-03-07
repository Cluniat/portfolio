import React, { Component } from 'react';
import './InfoProject.scss';
import PropTypes from 'prop-types';
import Modal from "../Modal/Modal";



class InfoProject extends Component {


    render() {
        return (
            <div className={"info-project"}>
                <div className={"light-square"}>
                    <div className={"title"}>{this.props.title}</div>
                </div>
                <div className={"dark-square"}>
                    <div className={"description"}> {this.props.description} </div>
                    <div className={"technos"}> {this.props.technos.toUpperCase()} </div>
                </div>
            </div>
        );
    }
}

InfoProject.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    technos: PropTypes.string,
};

Modal.defaultProps = {
    technos: '',
};

export default InfoProject;
