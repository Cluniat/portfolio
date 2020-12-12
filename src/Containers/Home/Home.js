import React, { useCallback, useEffect } from 'react'
import './Home.scss'
import Header from '../../Components/Header/Header'
import FormationContent from '../../Components/FormationContent/FormationContent'
import ProjetContent from '../../Components/ProjetContent/ProjetContent'
import Tab from '../../Components/Tab/Tab'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import CompetenceContent from '../../Components/CompetenceContent/CompetenceContent'
import ExperienceContent from '../../Components/ExperienceContent/ExperienceContent'
import { Link } from 'react-router-dom'
import DesignContent from '../../Components/DesignContent/DesignContent'

import { lastProject } from '../../Store/Project/actions'
import { lastExperience } from '../../Store/Experience/actions'
import { lastEducation } from '../../Store/Education/actions'
import { useDispatch } from 'react-redux'

const Home = () => {
  library.add(fas, fab)
  const dispatch = useDispatch()
  const getLastEducation = useCallback(
    () => dispatch(lastEducation()),
    [dispatch],
  )
  const getLastExperience = useCallback(
    () => dispatch(lastExperience()),
    [dispatch],
  )
  const getLastProject = useCallback(
    () => dispatch(lastProject()),
    [dispatch],
  )

  useEffect(() => {
    getLastEducation()
    getLastExperience()
    getLastProject()
  }, [getLastEducation, getLastExperience, getLastProject])

  return (
      <div>
          <Header/>
          <Link to={'/project'}>
              <Tab title={'Projets'} hasModal={false}>
                  <ProjetContent/>
              </Tab>
          </Link>
          <Tab title={'Compétences'} isCompetence={true}>
              <CompetenceContent/>
          </Tab>
          <Tab title={'Expériences'} isExperience={true}>
              <ExperienceContent/>
          </Tab>
          <Tab title={'Formation'} isFormation={true}>
              <FormationContent/>
          </Tab>
          <Link to={'/design'}>
              <Tab title={'Designs'} hasModal={false}>
                  <DesignContent/>
              </Tab>
          </Link>
      </div>
  )
}

export default Home
