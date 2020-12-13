import React from 'react'
import './InfoProject.scss'
import PropTypes from 'prop-types'
import Modal from '../Modal/Modal'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoProject = ({ collapse, title, technos, description, link }) => {
  library.add(faGithub)

  const addDescription = () => {
    if (collapse) {
      return 'dark-square'
    } else {
      return 'dark-square show'
    }
  }

  return (
      <div className={'info-project'}>
          <div className={'light-square top'}>
              <div className={'title'}> {title.toUpperCase()} </div>
          </div>
          {
              <div className={addDescription()}>
                  <div className={'description'}> {description} </div>
              </div>
                }
          <div className={'light-square bottom'}>
              <div className={'technos'}>{technos.split(',').join(', ')}</div>
              <a href={link} className={'git-link'} target={'_blank'} rel= {'noopener noreferrer'}>
                  <FontAwesomeIcon icon={faGithub}/> See on GitHub
              </a>
          </div>
      </div>
  )
}

InfoProject.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  technos: PropTypes.string,
  collapse: PropTypes.bool,
  link: PropTypes.string,
}

Modal.defaultProps = {
  technos: '',
  collapse: false,
}

export default InfoProject
