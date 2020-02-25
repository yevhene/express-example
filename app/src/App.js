import React from 'react'
import { Routes, Route } from 'react-router-dom'

import StudentsList from './students/List'
import StudentsEdit from './students/Edit'
import StudentsNew from './students/New'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StudentsList />} />
        <Route path="/students/new" element={<StudentsNew />} />
        <Route path="/students/:id/edit" element={<StudentsEdit />} />
      </Routes>
    </div>
  )
}

export default App
