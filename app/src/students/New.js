import React from 'react'
import { useNavigate } from 'react-router-dom'

import Form from './Form'
import * as studentsApi from '../api/students'

const New = () => {
  const navigate = useNavigate()

  function onUpdate(studentData) {
    studentsApi.create(studentData).then(() => navigate('/'))
  }

  return <Form student={{ name: '', group: '' }} onUpdate={onUpdate} />
}

export default New
