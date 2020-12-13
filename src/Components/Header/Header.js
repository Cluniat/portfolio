import React, { useState, useEffect } from 'react'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../Assets/images/philippine-cluniat.png'
import photo from '../../Assets/images/PHIPHI.png'

const Header = () => {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    setIsAnimated(true)
  }, [])

  return (
      <div className="header">

          <div className={'info'}>
              <img className={'logo'} src={logo} alt={'Philippine Cluniat'}/>
              <div className={'line'}>
                  <a className={'icon'} href={'mailto:philippine.cluniat@gmail.com'}>
                      <FontAwesomeIcon className={'font-awesome'} icon="envelope"/>
                  </a>
                  <a className={'icon'} href={'https://github.com/Cluniat'} target={'_blank'} rel={'noopener noreferrer'}>
                      <FontAwesomeIcon className={'font-awesome'} icon={['fab', 'github']}/>
                  </a>
                  <a className={'icon'} href={'https://www.linkedin.com/in/philippine-cluniat-39ab0b158/'}
                   target={'_blank'} rel={'noopener noreferrer'}>
                      <FontAwesomeIcon className={'font-awesome'} icon={['fab', 'linkedin']}/>
                  </a>
              </div>
          </div>

          <div className={isAnimated ? 'photo-cover slideIn' : 'photo-cover'}>
              <img className={'photo'} src={photo} alt={'Philippine Cluniat'}/>
          </div>

      </div>
  )
}

export default Header
