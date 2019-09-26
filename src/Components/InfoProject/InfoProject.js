import React, { Component } from 'react';
import './InfoProject.scss';
import PropTypes from 'prop-types';
import Modal from "../Modal/Modal";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



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
            const strTechnos = this.props.technos.replace(/,/g, ' ')
            if(strTechnos.length > 27) {
                return strTechnos.substr(0, 27).toUpperCase();
            }
            else {
                return strTechnos.toUpperCase();
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
        library.add(faGithub);
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
                    <a href={this.props.link} className={"git-link"} target={"_blank"} rel= {"noopener noreferrer"}>
                        <FontAwesomeIcon icon={faGithub}/> See on GitHub
                    </a>
                </div>
            </div>
        );
    }
}

InfoProject.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    technos: PropTypes.string,
    collapse: PropTypes.bool,
    link: PropTypes.string,
};

Modal.defaultProps = {
    technos: '',
    collapse: false,
};

export default InfoProject;
