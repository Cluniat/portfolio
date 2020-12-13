import React from 'react'
import './CompetenceContent.scss'
import vuejs from '../../Assets/images/vuejs.png'
import reactjs from '../../Assets/images/reactjs.png'
import rn from '../../Assets/images/rn.png'
import javascript from '../../Assets/images/js.png'
import node from '../../Assets/images/node.png'
import graphql from '../../Assets/images/graphql.png'

const CompetenceContent = () => (
    <div className={'logos'}>
        <img className={'icon'} src={javascript} alt={'javascript'}/>
        <img className={'icon'} src={rn} alt={'react-native'}/>
        <img className={'icon'} src={reactjs} alt={'reactjs'}/>
        <img className={'icon'} src={vuejs} alt={'vuejs'}/>
        <img className={'icon'} src={node} alt={'nodejs'}/>
        <img className={'icon'} src={graphql} alt={'graphql'}/>
    </div>
)

export default CompetenceContent
