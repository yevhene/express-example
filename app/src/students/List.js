import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as studentsApi from '../api/students'

const List = () => {
  const [students, setStudents] = useState([])

  function index() {
    studentsApi.index().then((students) => setStudents(students))
  }

  function destroy(id) {
    studentsApi.destroy(id).then(index)
  }

  useEffect(index, [])

  const navigate = useNavigate()

  return (
    <>
      <h3>Students</h3>

      <table>
        <thead>
          <tr><th>#</th><th>Ім&apos;я</th><th>Група</th><th></th></tr>
        </thead>
        <tbody>
          {students.map((student) =>
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.group}</td>
              <td>
                <button
                  onClick={() => navigate(`/students/${student.id}/edit`)}
                >
                  Редагувати
                </button>
                <button onClick={() => destroy(student.id)}>
                  Видалити
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={() => navigate(`/students/new`)}>
        Створити
      </button>
    </>
  )
}

export default List
