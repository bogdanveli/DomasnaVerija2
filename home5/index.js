console.log("Zmaj123");
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const db = require('./bootstrap/db');
const student = require('./models/student');

db.initDB();

student.createNew({
    "ime" : "Zmaj5",
    "index" : 171555,
    "smer" : "PET",
    "krediti" : 100.0,
})
   
  // .then(() => {
  //      return student.remove("5e42b29efa1704ec24b04e1f");
  //  })
    .then(() => {
        return student.readAll()
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');
//app.get('/students', students.getStudents);
//app.post('/students', students.postStudents);
app.listen(8080);