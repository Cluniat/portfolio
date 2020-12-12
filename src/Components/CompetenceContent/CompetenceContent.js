import React from 'react';
import './CompetenceContent.scss';
import vuejs from "../../Assets/images/vuejs.png";
import reactjs from "../../Assets/images/reactjs.png";
import angular from "../../Assets/images/angular.png";
import java from "../../Assets/images/java.png";
import laravel from "../../Assets/images/laravel.png";
import netcore from "../../Assets/images/aspnetcore.png";

const CompetenceContent = () =>  (
    <div className={"logos"}>
        <img className={"icon"} src={vuejs} alt={"vuejs"} height={"103px"} width={"103px"}/>
        <img className={"icon"} src={reactjs} alt={"reactjs"} height={"118px"} width={"114px"}/>
        <img className={"icon"} src={angular} alt={"angular"} height={"148px"} width={"148px"}/>
        <img className={"icon"} src={java} alt={"java"} height={"148px"} width={"74px"}/>
        <img className={"icon"} src={laravel} alt={"laravel"} height={"76px"} width={"222px"}/>
        <img className={"icon"} src={netcore} alt={"netcore"} height={"112px"} width={"148px"}/>
    </div>
)

export default CompetenceContent;
