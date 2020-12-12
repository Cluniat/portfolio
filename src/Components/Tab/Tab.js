import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Tab.scss'
import Modal from '../../Components/Modal/Modal'
import ModalFormation from '../ModalFormation/ModalFormation'
import ModalCompetence from '../ModalCompetence/ModalCompetence'
import ModalExperience from '../ModalExperience/ModalExperience'

const Tab = ({ isFormation, isCompetence, isExperience, title, children, hasModal }) => {
  const [displayModal, setDisplayModal] = useState(false)

  const toggleModal = () => {
    setDisplayModal(!displayModal)
  }

  const _renderContent = () => {
    if (isFormation) {
      return <ModalFormation/>
    } else if (isCompetence) {
      return <ModalCompetence/>
    } else if (isExperience) {
      return <ModalExperience/>
    } else {
      return null
    }
  }

  return (
      <div>
          <div className={'tab'} onClick={toggleModal}>
              <div className={'title'}>{title.toUpperCase()}</div>
              <div className={'tab-content'}>{children}</div>
          </div>
          {
          displayModal && hasModal && <Modal visible={displayModal} onClose={toggleModal} title={title}>{_renderContent()}</Modal>
      }
      </div>
  )
}

Tab.propTypes = {
  title: PropTypes.string,
  hasModal: PropTypes.bool,
  isFormation: PropTypes.bool,
  isCompetence: PropTypes.bool,
  isExperience: PropTypes.bool,
  children: PropTypes.element,
}

Tab.defaultProps = {
  title: '',
  hasModal: true,
  isFormation: false,
  isCompetence: false,
  isExperience: false,
}
export default Tab
