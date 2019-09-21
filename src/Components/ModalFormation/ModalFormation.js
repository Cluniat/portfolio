import React, { Component } from 'react';
import './ModalFormation.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import EducationActions from "../../Store/Education/actions";
import {connect} from "react-redux";
import {Utils} from "../../Utils";


class ModalFormation extends Component {

    componentDidMount() {
        this.props.getEducations()
    }

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
        else {
            return (
                <div className={"description"}>
                    {content}
                </div>
            )
        }

    }


    render() {
        return (
            (this.props.educations && !this.props.educations.loading) ?
             this.props.educations.data.map((education, index) => (
                 <div className={"modal-formation"} key={`education-${index}`}>
                     <div className={"formation"}>
                         <div className={"year"}>{education.start} / {education.end}</div>
                         <div className={"pipe"}/>
                         <div className={"details"}>
                             {this._renderDescription(education.description)}
                             <div className={"place"}>
                                 <FontAwesomeIcon className={"font-awesome"} icon="map-marker-alt"/>
                                 <div className={"place-name"}>{Utils.capitalizeSentence(education.place)}</div>
                             </div>
                         </div>
                     </div>
                 </div>
                ))
                : null
        );

    }

}

const mapStateToProps = state => ({
    educations: state.educations.educations,
});

const mapDispatchToProps = dispatch => ({
    getEducations: () => dispatch(EducationActions.allEducations())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalFormation);