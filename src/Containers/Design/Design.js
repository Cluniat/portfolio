import React, { Component } from 'react';
import DetailsHeader from "../../Components/DetailsHeader/DetailsHeader";
import DetailsBody from "../../Components/DetailsBody/DetailsBody";
import "./Design.scss"
import * as ReactDOM from "react-dom";


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
        ReactDOM.findDOMNode(this.refs.logo).focus()
    }

    render() {

        return (
            <div className={"design-page"}>
                <DetailsHeader title={"design"}/>
                <div className={"btns"}>
                    <button className={"design-btn"} ref={"logo"} onClick={() => this.setState({isLogo: true})}>
                        Logos
                    </button>
                    <button className={"design-btn"} onClick={() => this.setState({isLogo: false})}>
                        Affiches
                    </button>
                </div>
                {this.renderDetailsBody()}
            </div>

        );
    }
}



export default Design;
