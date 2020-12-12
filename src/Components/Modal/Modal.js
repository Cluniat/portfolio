import React, { useState, useEffect } from 'react';
import './Modal.scss';
import PropTypes from 'prop-types';



const Modal = ({visible, onClose, title, children}) => {
    const [animateIn, setAnimateIn] = useState(!visible);
    const [containerClass, setContainerClass] = useState(["one"]);
    const [modalClass, setModalClass] = useState(["modal-component"]);

    useEffect(() => {
        if(visible) {
            if(animateIn) {
                setContainerClass([...containerClass, "out"])
            } else {
                setModalClass([...modalClass, "modal-active"])
            }
        }
    }, [visible, animateIn])

    const toggle = () => {
        setAnimateIn(!animateIn);
    }

    const close = () => {
        toggle();
        setTimeout(() => onClose(), 1000);
    }

    return (
        <div className={modalClass.join(' ')}>
            <div id="modal-container" className={containerClass.join(' ')} onClick={close}>
                <div className="modal-background">
                    <div className="modal">
                        <div className={"modal-content"}>
                            <div className={"title"}>
                                {title.toUpperCase()}
                            </div>
                            <div className={"tab-content"}>
                                {children}
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

Modal.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
};

Modal.defaultProps = {
    visible: false,
};

export default Modal;
