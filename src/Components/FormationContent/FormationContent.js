import React, { Component } from 'react';
import './FormationContent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import {Utils} from '../../Utils'


class FormationContent extends Component {

    _renderDescription(content) {
        const sup = 'ème';
        if(content.includes(sup)){
            let split = content.split(sup)
            return (
                <div className={"description"}>
                    {
                        split.map((item, index, tab) => (
                            <span key={index}>
                                {index !== tab.length - 1 ? (<span>{item}<sup>éme</sup></span>) : <span>{item}</span> }
                            </span>
                        ))
                    }
                </div>
            )
        }
    }

    render() {
        return (
            (this.props.lastEducation && !this.props.lastEducation.loading) ?
                <div className={"formation-content"}>
                    <div className={"formation"}>
                        <div className={"year"}>{this.props.lastEducation.data.start} / {this.props.lastEducation.data.end}</div>
                        <div className={"pipe"}/>
                        <div className={"details"}>
                            {this._renderDescription(this.props.lastEducation.data.description)}
                            <div className={"place"}>
                                <FontAwesomeIcon className={"font-awesome"} icon="map-marker-alt"/>
                                <div className={"place-name"}>{Utils.capitalizeSentence(this.props.lastEducation.data.place)}</div>
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
