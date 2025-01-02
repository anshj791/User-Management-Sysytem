const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'student_registration'
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected');
});

app.get('/', (req, res) => {
  const query = 'SELECT * FROM student';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.render('index', { students: results });
  });
});

// Add Student
app.get('/add', (req, res,) => {
  res.render('add');
});

app.post('/add', (req, res) => {
  const { name, age, email } = req.body;
  const student = { name, age, email };
  const query = 'INSERT INTO student SET ?';
  db.query(query, student, (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});


// Edit a student
app.get('/edit/:name', (req, res) => {
  const na = req.params.name;
  const query = 'SELECT * FROM student WHERE name = ?';
  db.query(query, na, (err, result) => {
      if (err) throw err;
      res.render('edit', { student: result[0] });
  });
});

app.post('/edit/:name', (req, res) => {
  const na = req.params.name;
  const { name, age, email } = req.body;
  const query = 'UPDATE student SET name=?, age=?, email=? WHERE name=?';
  db.query(query, [name, age, email, na], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

 // Delete a student
app.get('/delete/:name', (req, res) => {
  const na = req.params.name;
  const query = 'DELETE FROM student WHERE name = ?';
  db.query(query, na, (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
