import React, {Component} from 'react';
import './DesignContent.scss';
import polytech_2018 from "../../Assets/designs/polytech_2018.png";
import mimi from "../../Assets/designs/black_mimi.png";
import irhumman from "../../Assets/designs/IRhumMan.png";
import logo_gone from "../../Assets/designs/logo-gone.png";
import logo_bal from "../../Assets/designs/ecocup_bal.png";
import hogwec from "../../Assets/designs/hogwec_black.png";


class DesignContent extends Component {

    render() {
        return (
            <div className={"design-content"}>
                <img className={"design"} src={polytech_2018} alt={"polytech_2018"}/>
                <img className={"design"} src={mimi} alt={"mimi"}/>
                <img className={"design"} src={irhumman} alt={"irhumman"}/>
                <img className={"design"} src={logo_gone} alt={"logo_gone"}/>
                <img className={"design"} src={logo_bal} alt={"logo_bal"}/>
                <img className={"design"} src={hogwec} alt={"hogwec"}/>

            </div>
        );

    }
}


export default DesignContent;
