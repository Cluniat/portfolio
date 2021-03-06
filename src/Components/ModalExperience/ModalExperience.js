import React, { useEffect, useCallback } from 'react'
import './ModalExperience.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { allExperiences } from '../../Store/Experience/actions'
import { Utils } from '../../Utils'

const ModalExperience = () => {
  const dispatch = useDispatch()
  const getExperiences = useCallback(
    () => dispatch(allExperiences()),
    [dispatch],
  )
  const experiences = useSelector(state => state.experiences.experiences)

  useEffect(() => {
    getExperiences()
  }, [])

  return (
    (experiences && !experiences.loading)
      ? <div className={'modal-experience'}>
          <div className={'block'}>
              {experiences.data.map((experience, index) => (
                  <div className={'experience'} key={`xp-${index}`}>
                      <div className={'year'}>{experience.date}</div>
                      <div className={'pipe'}/>
                      <div className={'details'}>
                          <div className={'description'}>{experience.description}</div>
                          <div className={'place'}>
                              <FontAwesomeIcon className={'font-awesome'} icon="map-marker-alt"/>
                              <div className={'place-name'}>{experience.company} {Utils.capitalize(experience.place)}</div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
          <div className={'block skills'}>
              {experiences.data.map((experience, index) => (
                  <div className={'experience'} key={`xp-${index}`}>
                      <div className={'dots'}>
                          <FontAwesomeIcon icon={'ellipsis-h'}/>
                      </div>
                      <div className={'cpt'}>
                          {
                        experience.skills.map((skill, index) =>
                            <span key={'skill-' + index}> {skill.toUpperCase()} </span>,
                        )}
                      </div>
                  </div>
              ))}
          </div>
      </div>
      : null
  )
}

export default ModalExperience
