import React, { Component } from 'react';
import './FormationContent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';


class FormationContent extends Component {

    render() {
        return (
            (this.props.lastEducation && !this.props.lastEducation.loading) ?
                <div className={"formation-content"}>
                    <div className={"formation"}>
                        <div className={"year"}>{this.props.lastEducation.data.start} / {this.props.lastEducation.data.end}</div>
                        <div className={"pipe"}/>
                        <div className={"details"}>
                            <div className={"description"}>{this.props.lastEducation.data.description}</div>
                            <div className={"place"}>
                                <FontAwesomeIcon className={"font-awesome"} icon="map-marker-alt"/>
                                <div className={"place-name"}>{this.props.lastEducation.data.place}</div>
                            </div>
                        </div>
                    </div>
                    <div className={"more"}>
                        <FontAwesomeIcon icon={"ellipsis-h"}/>
                    </div>
                </div>
                : null
        );

    }
}
const mapStateToProps = state => ({
    lastEducation: state.educations.lastEducation,
});

export default connect(
    mapStateToProps,
    null
)(FormationContent);
