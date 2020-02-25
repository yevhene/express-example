import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Form from './Form'
import * as studentsApi from '../api/students'

const Edit = () => {
  const navigate = useNavigate()
  const params = useParams()
  const id = parseInt(params['id'])

  const [student, setStudent] = useState({ name: '', group: '' })

  useEffect(() => { studentsApi.get(id).then(setStudent) }, [id])

  function onUpdate(studentData) {
    studentsApi.update(id, studentData).then(() => navigate('/'))
  }

  return <Form student={student} onUpdate={onUpdate} />
}

export default Edit
