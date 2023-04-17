const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Student = require('./models/studentModel');


app.use(express.json());

app.listen(3000, (req, res) => {
  console.log("Listening to port 3000");
});

mongoose.connect('mongodb://127.0.0.1:27017/school').then(() => {
  console.log('connected');
}).catch(() => {
  console.log('DB Connection error');
})


//Get all students
app.get("/getStudents", async (req, res) => {
  console.log("Inside get all students");

  const allStudents = await Student.find().sort({name: 1});
  res.json(allStudents);
});


//Get one student
app.get("/getStudent/:name", async (req, res) => {
  console.log("Inside get one student using name");

  const oneStudent = await Student.find({ name: req.params.name });
  res.send(oneStudent);
});


//Create a new student
app.post("/addStudent", async (req, res) => {
  console.log("Inside create a new student");

  const newStudent = await Student.create({
    name: req.body.studName,
    age: req.body.studAge,
    address: req.body.studAddress
  })
  res.json(newStudent);
});


//Update a student's details
app.put("/updateStudent", async (req, res) => {
  console.log("Inside update api");

  await Student.findOneAndUpdate({ name: req.body.studName }, { $set: { age: req.body.studAge, address: req.body.studAddress } });

});


//Delete a student's record
app.delete("/deleteStudent/:name", async (req, res) => {
  console.log("Inside delete api");

  await Student.findOneAndDelete({ name: req.params.name });
  res.send("Deleted the record");
})
