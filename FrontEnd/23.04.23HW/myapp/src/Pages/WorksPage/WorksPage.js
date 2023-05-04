import React from 'react'
import WorksContainer from '../../components/WorksContainer/WorksContainer'
import { works } from '../../data' 

function WorksPage() {
  return (
    <div className='container'>
      <WorksContainer works={works} /></div>
  )
}

export default WorksPage