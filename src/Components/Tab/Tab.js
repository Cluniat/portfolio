import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tab.scss';
import Modal from "../../Components/Modal/Modal";
import ModalFormation from "../ModalFormation/ModalFormation";
import ModalCompetence from "../ModalCompetence/ModalCompetence";
import ModalExperience from "../ModalExperience/ModalExperience";


class Tab extends Component {

    constructor(props) {
        super(props);
        this.state = {displayModal: false};
    }

    toggleModal() {
        this.setState({displayModal: !this.state.displayModal});
    }

    getContent() {
        if(this.props.isFormation) {
            return <ModalFormation/>;
        }
        else if(this.props.isCompetence) {
            return <ModalCompetence/>;
        }
        else if(this.props.isExperience) {
            return <ModalExperience/>;
        }
        else {
            return null;
        }
    }


    render() {
        return (
            <div>
                <div className={"tab"} onClick={this.toggleModal.bind(this)}>
                    <div className={"title"}>
                        {this.props.title.toUpperCase()}
                    </div>
                    <div className={"tab-content"}>
                        {this.props.children}
                    </div>
                </div>
                {
                    (this.state.displayModal && this.props.hasModal) ?
                        <Modal visible={this.state.displayModal} onClose={this.toggleModal.bind(this)} title={this.props.title}>
                            {this.getContent()}
                        </Modal> : null }
            </div>

        );
    }
}

Tab.propTypes = {
    title: PropTypes.string,
    hasModal: PropTypes.bool,
    isFormation: PropTypes.bool,
    isCompetence: PropTypes.bool,
    isExperience: PropTypes.bool,
};

Tab.defaultProps = {
    title: '',
    hasModal: true,
    isFormation: false,
    isCompetence: false,
    isExperience: false,
};
export default Tab;
