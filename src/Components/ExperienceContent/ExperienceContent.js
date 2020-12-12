import React from 'react'
import './ExperienceContent.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { Utils } from '../../Utils'

const ExperienceContent = () => {
  const lastExperience = useSelector(state => state.experiences.lastExperience)

  return (
    (lastExperience && !lastExperience.loading)
      ? <div className={'experience-content'}>
          <div className={'experience'}>
              <div className={'year'}>{lastExperience.data.date}</div>
              <div className={'pipe'}/>
              <div className={'details'}>
                  <div className={'poste'}>{Utils.capitalize(lastExperience.data.description)}</div>
                  <div className={'place'}>
                      <FontAwesomeIcon className={'font-awesome'} icon="map-marker-alt"/>
                      <div
                                className={'place-name'}>{lastExperience.data.company} {Utils.capitalize(lastExperience.data.place)}</div>
                  </div>
              </div>
              <div className={'dots'}>
                  <FontAwesomeIcon icon={'ellipsis-h'}/>
                  <FontAwesomeIcon icon={'ellipsis-h'}/>
                  <FontAwesomeIcon icon={'ellipsis-h'}/>
              </div>
              <div className={'cpt'}>
                  {
                            lastExperience.data.skills.map((skill, index) =>
                                <span key={'skill-' + index}> {skill.toUpperCase()} </span>,
                            )}
              </div>

          </div>
          <div className={'more'}>
              <FontAwesomeIcon icon={'ellipsis-h'}/>
          </div>
      </div>
      : null
  )
}

export default ExperienceContent
