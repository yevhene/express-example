const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: false }))

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

app.get('/', function(req, res) {
  res.redirect('/students');
});

app.get('/students', function(req, res) {
  res.render('students/index', { students });
});

app.get('/students/new', function(req, res) {
  res.render('students/new');
});

app.post('/students', function(req, res) {
  const student = {
    ...req.body,
    id: newId()
  };
  students.push(student)
  res.redirect(`/students/${student.id}`);
})

app.get('/students/:id/edit', function(req, res) {
  const student = findById(req.params.id);
  res.render('students/edit', { student });
});

app.post('/students/:id', function(req, res) {
  const student = findById(req.params.id);
  Object.assign(student, req.body, { id: student.id });
  res.redirect(`/students/${student.id}`);
});

app.get('/students/:id', function(req, res) {
  const student = findById(req.params.id);
  res.render('students/show', { student });
});

app.get('/students/:id/delete', function(req, res) {
  const studentId = parseInt(req.params.id);
  const index = students.findIndex((student) => student.id === studentId);
  students.splice(index, 1);
  res.redirect('/');
});

app.listen(3000, function() {
  console.log('App started on http://localhost:3000');
});
