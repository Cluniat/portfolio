import React, { Component } from 'react';
import './ProjetContent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

class ProjetContent extends Component {

    render() {
        return (
            (this.props.lastProject && !this.props.lastProject.loading) ?
                <div className={"projet"}>
                <div className={"name-technos"}>
                    <div className={"project-name"}>{this.props.lastProject.data.name}</div>
                    <div className={"pipe"}/>
                    <div className={"technos"}>
                        {
                            this.props.lastProject.data.technos.map((techno, index) =>
                                <span key={'techno-'+index}> {techno.toUpperCase()} </span>
                            )}
                    </div>
                </div>
                <div className={"project-description"}>{this.props.lastProject.data.description}</div>
                <div className={"more"}>
                    <FontAwesomeIcon icon={"ellipsis-h"}/>
                </div>
            </div> : null
        );

    }
}

const mapStateToProps = state => ({
    lastProject: state.projects.lastProject,
});

export default connect(
    mapStateToProps,
    null
)(ProjetContent);