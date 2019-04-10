import React, { Component } from 'react';
import './DetailsHeader.scss';
import PropTypes from "prop-types";
import Tab from "../Tab/Tab";
import BackButton from "../BackButton/BackButton";


class DetailsHeader extends Component {

    render() {
        return (
            <div className="details-header">
                <BackButton/>
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
