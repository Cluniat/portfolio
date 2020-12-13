import React from 'react'
import './ModalCompetence.scss'
import vuejs from '../../Assets/images/vuejs.png'
import reactjs from '../../Assets/images/reactjs.png'
import angular from '../../Assets/images/angular.png'
import java from '../../Assets/images/java.png'
import laravel from '../../Assets/images/laravel.png'
import netcore from '../../Assets/images/aspnetcore.png'
import git from '../../Assets/images/git.png'
import sass from '../../Assets/images/sass.png'
import html from '../../Assets/images/html.png'
import css from '../../Assets/images/css.png'
import js from '../../Assets/images/js.png'
import php from '../../Assets/images/php.png'
import graphql from '../../Assets/images/graphql.png'
import kotlin from '../../Assets/images/kotlin.png'
import mongo from '../../Assets/images/mongo.png'
import mysql from '../../Assets/images/mysql.png'
import node from '../../Assets/images/node.png'
import rn from '../../Assets/images/rn.png'
import javascript from "../../Assets/images/js.png";

const ModalCompetence = () => (
    <div className={'modal-competence'}>
            <img className={'icon'} src={js} alt={'javascript'}/>
            <img className={'icon'} src={rn} alt={'react-native'}/>
            <img className={'icon'} src={reactjs} alt={'reactjs'}/>
            <img className={'icon'} src={vuejs} alt={'vuejs'}/>
            <img className={'icon'} src={node} alt={'nodejs'}/>
            <img className={'icon'} src={graphql} alt={'graphql'}/>
            <img className={'icon'} src={mysql} alt={'mysql'}/>
            <img className={'icon'} src={mongo} alt={'mongodb'}/>
            <img className={'icon'} src={angular} alt={'angular'}/>
            <img className={'icon'} src={kotlin} alt={'kotlin'}/>
            <img className={'icon'} src={java} alt={'java'} />
            <img className={'icon'} src={laravel} alt={'laravel'}/>
            <img className={'icon'} src={netcore} alt={'netcore'}/>
            <img className={'icon'} src={php} alt={'php'}/>
            <img className={'icon'} src={git} alt={'git'}/>
            <img className={'icon'} src={sass} alt={'sass'}/>
            <img className={'icon'} src={html} alt={'html'}/>
            <img className={'icon'} src={css} alt={'css'}/>
    </div>
)

export default ModalCompetence
