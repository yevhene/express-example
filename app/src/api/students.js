const ENDPOINT = 'http://localhost:3000';

export const index = () =>
  fetch(`${ENDPOINT}/students`).then((response) => response.json())

export const get = (id) =>
  fetch(`${ENDPOINT}/students/${id}`).then((response) => response.json())

export const create = (data) =>
  fetch(`${ENDPOINT}/students/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((response) => response.json())

export const update = (id, data) =>
  fetch(`${ENDPOINT}/students/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((response) => response.json())

export const destroy = (id) =>
  fetch(`${ENDPOINT}/students/${id}`, { method: 'DELETE' })
