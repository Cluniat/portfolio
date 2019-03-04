import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tab.scss';
import Modal from "../../Components/Modal/Modal";


class Tab extends Component {

    constructor(props) {
        super(props);
        this.state = {displayModal: false};
    }

    toggleModal() {
        this.setState({displayModal: !this.state.displayModal});
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
                    this.state.displayModal ?
                <Modal visible={this.state.displayModal} onClose={this.toggleModal.bind(this)} /> : null }
            </div>

        );
    }
}

Tab.propTypes = {
    title: PropTypes.string,
};

Tab.defaultProps = {
    title: '',
};
export default Tab;
