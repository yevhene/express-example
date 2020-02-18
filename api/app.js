const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json())

const students = [{
  id: 1,
  name: 'Василь Пупкін',
  group: '1КН-18мс'
}, {
  id: 2,
  name: 'Петро Петров',
  group: '2КН-18б'
}];

function newId() {
  return Math.max(...students.map((student) => student.id)) + 1;
}

function findById(id) {
  const studentId = parseInt(id);
  return students.find((student) => student.id === studentId);
}

app.get('/students', function(req, res) {
  res.send(students);
});

app.post('/students', function(req, res) {
  const student = {
    ...req.body,
    id: newId()
  };
  students.push(student)
  res.send(student);
})

app.put('/students/:id', function(req, res) {
  const student = findById(req.params.id);
  Object.assign(student, req.body, { id: student.id });
  res.send(student);
});

app.get('/students/:id', function(req, res) {
  const student = findById(req.params.id);
  res.send(student);
});

app.get('/students/:id/delete', function(req, res) {
  const studentId = parseInt(req.params.ida );
  const index = students.findIndex((student) => student.id === studentId);
  students.splice(index, 1);
  res.sendStatus(200);
});

app.listen(3000, function() {
  console.log('App started on http://localhost:3000');
});
