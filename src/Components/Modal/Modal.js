import React, { Component } from 'react';
import './Modal.scss';
import PropTypes from 'prop-types';



class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {animateIn: !this.props.visible};
    }

    toggle() {
        this.setState({animateIn: !this.state.animateIn});
    }
    close() {
        this.toggle();
        setTimeout(() => this.props.onClose(), 1000);
    }

    render() {
        let containerClass= ["one"];
        let modalClass = ["modal-component"];

        if(this.props.visible) {
            if(this.state.animateIn) {
                containerClass.push("out");
            } else {
                modalClass.push("modal-active");
            }
        }
        console.log("modal comopnent")

        return (
            <div className={modalClass.join(' ')}>
                <div id="modal-container" className={containerClass.join(' ')} onClick={this.close.bind(this)}>
                    <div className="modal-background">
                        <div className="modal">
                            <div className={"modal-content"}>
                                <div className={"title"}>
                                    {this.props.title.toUpperCase()}
                                </div>
                                <div className={"tab-content"}>
                                    {this.props.children}
                                </div>
                            </div>
                            <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                                 preserveAspectRatio="none">
                                <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
};

Modal.defaultProps = {
    visible: false,
};

export default Modal;
