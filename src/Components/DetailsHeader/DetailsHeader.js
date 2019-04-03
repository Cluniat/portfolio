import React, { Component } from 'react';
import './DetailsHeader.scss';
import PropTypes from "prop-types";
import Tab from "../Tab/Tab";


class DetailsHeader extends Component {

    render() {
        return (
            <div className="project-header">

                <div className={"title"}>
                    {this.props.title.toUpperCase()}
                </div>

            </div>
        );
    }

}

DetailsHeader.propTypes = {
    title: PropTypes.string,
};
DetailsHeader.defaultProps = {
    title: '',
};

export default DetailsHeader;
