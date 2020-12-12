import React from 'react'
import './DesignContent.scss'
import polytech2018 from '../../Assets/designs/logo-polytech.jpg'
import mimi from '../../Assets/designs/logo-mimi.png'
import irhumman from '../../Assets/designs/logo-irhumman.png'
import logoGone from '../../Assets/designs/logo-gone.png'
import logoBal from '../../Assets/designs/logo-bal.png'
import hogwec from '../../Assets/designs/logo-hogwec.png'

const DesignContent = () => (
    <div className={'design-content'}>
        <img className={'design'} src={polytech2018} alt={'polytech_2018'}/>
        <img className={'design'} src={mimi} alt={'mimi'}/>
        <img className={'design'} src={irhumman} alt={'irhumman'}/>
        <img className={'design'} src={logoGone} alt={'logo_gone'}/>
        <img className={'design'} src={logoBal} alt={'logo_bal'}/>
        <img className={'design'} src={hogwec} alt={'hogwec'}/>

    </div>
)

export default DesignContent
