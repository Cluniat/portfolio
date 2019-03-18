import React, { Component } from 'react';
import './InfoProject.scss';
import PropTypes from 'prop-types';
import Modal from "../Modal/Modal";




class InfoProject extends Component {

    addDescription() {
        if(this.props.collapse) {
            return "dark-square";
        } else {
            return "dark-square show";
        }
    }

    resizeString(title, technos) {
        if(title) {
            if(this.props.title.length > 11) {
                return this.props.title.substr(0, 10);
            }
            else {
                return this.props.title;
            }
        }
        else if(technos) {
            if(this.props.technos.length > 27) {
                return this.props.technos.substr(0, 27).toUpperCase();
            }
            else {
                return this.props.technos.toUpperCase();
            }
        }
        else {
            if(this.props.description.length > 130) {
                return this.props.description.substr(0, 130);
            }
            else {
                return this.props.description;
            }
        }

    }

    render() {
        return (
            <div className={"info-project"}>
                <div className={"light-square top"}>
                    <div className={"title"}> {this.resizeString(true, false)} </div>
                </div>
                    {
                        <div className={this.addDescription()}>
                            <div className={"description"}> {this.resizeString(false, false)} </div>
                        </div>
                    }
                <div className={"light-square bottom"}>
                    <div className={"technos"}>{this.resizeString(false, true)}</div>
                </div>
            </div>
        );
    }
}

InfoProject.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    technos: PropTypes.string,
    collapse: PropTypes.bool
};

Modal.defaultProps = {
    technos: '',
    collapse: false,
};

export default InfoProject;
