import React from 'react';
import './DetailsHeader.scss';
import PropTypes from "prop-types";
import BackButton from "../BackButton/BackButton";


const DetailsHeader = ({title}) => (
    <div className="details-header">
        <BackButton/>
        <div className={"title"}>
            {title.toUpperCase()}
        </div>
    </div>
)

DetailsHeader.propTypes = {
    title: PropTypes.string,
};
DetailsHeader.defaultProps = {
    title: '',
};

export default DetailsHeader;
