import React, { Component } from 'react';
import DetailsHeader from "../../Components/DetailsHeader/DetailsHeader";
import DetailsBody from "../../Components/DetailsBody/DetailsBody";
import "./Design.scss"
import * as ReactDOM from "react-dom";
import BackButton from "../../Components/BackButton/BackButton";


class Design extends Component {

    constructor(props) {
        super(props);
        this.state = {isLogo: true};
    }

    renderDetailsBody(){
        if (this.state.isLogo) {
            return  <DetailsBody isLogo={true}/>
        }
        else {
            return  <DetailsBody isPoster={true}/>
        }
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.logo).focus();
    }


    render() {

        let logoBtnClass = ["design-btn"];
        let posterBtnClass = ["design-btn"];
        if(this.state.isLogo){
            logoBtnClass.push("clicked");
            posterBtnClass = ["design-btn"];
        }
        else {
            posterBtnClass.push("clicked");
            logoBtnClass = ["design-btn"];
        }

            return (
            <div className={"design-page"}>
                <DetailsHeader title={"design"}/>
                <div className={"btns"}>
                    <button className={logoBtnClass.join(' ')} ref={"logo"} onClick={() => this.setState({isLogo: true})}>
                        Logos
                    </button>
                    <button className={posterBtnClass.join(' ')} onClick={() => this.setState({isLogo: false})}>
                        Affiches
                    </button>
                </div>
                {this.renderDetailsBody()}
            </div>

        );
    }
}



export default Design;
