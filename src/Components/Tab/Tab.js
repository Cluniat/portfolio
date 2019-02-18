import React, { Component } from 'react';
import PropTypes from 'react';
import './Tab.scss';

class Tab extends Component {

    render() {
        return (
            <div className={"tab"}>
                <div className={"title"}>
                    {this.props.title.toUpperCase()}
                </div>
                <div className={"content"}>
                    {this.props.children}
                </div>
            </div>
        );

    }
}

Tab.propTypes = {
    title: PropTypes.string,
}

Tab.defaultProps = {
    title: '',
}
export default Tab;
