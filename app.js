// Write and export an Express app in app.js

const express = require('express');
const app = express();
const employees = require('./employees.js')

app.get("/", async(req, res)=>{
        res.send("Hello Employees!");
})

app.get("/employees/:id", async(req, res)=>{
        res.send(employees[employee]);
})


export default app;