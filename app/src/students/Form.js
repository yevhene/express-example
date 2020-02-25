import React, { useEffect, useState, useCallback } from 'react'

const Form = ({ student, onUpdate }) => {
  const [name, setName] = useState(student.name)
  const [group, setGroup] = useState(student.group)

  useEffect(() => {
    setName(student.name)
    setGroup(student.group)
  }, [student.name, student.group])

  const updateGroup = useCallback((e) => setGroup(e.target.value), [setGroup])

  function onSubmit(e) {
    e.preventDefault()
    e.stopPropagation()

    onUpdate({ name, group })
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Group:
        <input value={group} onChange={updateGroup} />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Form
