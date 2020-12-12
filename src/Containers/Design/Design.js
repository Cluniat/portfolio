import React, { useState, useEffect } from 'react'
import DetailsHeader from '../../Components/DetailsHeader/DetailsHeader'
import DetailsBody from '../../Components/DetailsBody/DetailsBody'
import './Design.scss'

const Design = () => {
  const [isLogo, setIsLogo] = useState(true)
  const [logoBtnClass, setLogoBtnClass] = useState(['design-btn'])
  const [posterBtnClass, setPosterBtnClass] = useState(['design-btn'])

  useEffect(() => {
    setLogoBtnClass(isLogo ? [...logoBtnClass, 'clicked'] : ['design-btn'])
    setPosterBtnClass(!isLogo ? [...posterBtnClass, 'clicked'] : ['design-btn'])
  }, [isLogo])

  const renderDetailsBody = () => {
    if (isLogo) {
      return <DetailsBody isLogo={true}/>
    } else {
      return <DetailsBody isPoster={true}/>
    }
  }

  return (
      <div className={'design-page'}>
          <DetailsHeader title={'design'}/>
          <div className={'btns'}>
              <button className={logoBtnClass.join(' ')} onClick={() => setIsLogo(true)}>
                  Logos
              </button>
              <button className={posterBtnClass.join(' ')} onClick={() => setIsLogo(false)}>
                  Affiches
              </button>
          </div>
          {renderDetailsBody()}
      </div>
  )
}

export default Design
