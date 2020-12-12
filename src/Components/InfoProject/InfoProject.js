import React from 'react';
import './InfoProject.scss';
import PropTypes from 'prop-types';
import Modal from "../Modal/Modal";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const InfoProject = ({collapse, title, technos, description, link}) => {

    library.add(faGithub);

    const addDescription = () => {
        if(collapse) {
            return "dark-square";
        } else {
            return "dark-square show";
        }
    }

    const resizeString = (isTitle, isTechnos) => {
        if(isTitle) {
            if(title.length > 11) {
                return title.substr(0, 10);
            }
            else {
                return title;
            }
        }
        else if(isTechnos) {
            const strTechnos = technos.replace(/,/g, ' ')
            if(strTechnos.length > 27) {
                return strTechnos.substr(0, 27).toUpperCase();
            }
            else {
                return strTechnos.toUpperCase();
            }
        }
        else {
            if(description.length > 130) {
                return description.substr(0, 130);
            }
            else {
                return description;
            }
        }

    }
    return (
        <div className={"info-project"}>
            <div className={"light-square top"}>
                <div className={"title"}> {resizeString(true, false)} </div>
            </div>
                {
                    <div className={addDescription()}>
                        <div className={"description"}> {resizeString(false, false)} </div>
                    </div>
                }
            <div className={"light-square bottom"}>
                <div className={"technos"}>{resizeString(false, true)}</div>
                <a href={link} className={"git-link"} target={"_blank"} rel= {"noopener noreferrer"}>
                    <FontAwesomeIcon icon={faGithub}/> See on GitHub
                </a>
            </div>
        </div>
    );
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
