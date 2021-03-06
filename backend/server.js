require("dotenv").config();
const mongoose = require("mongoose");
const express = require('express');
const cors = require('cors')

const student = require('./src/controllers/student_controller')
const task = require('./src/controllers/taskController')
const app = express();
app.use(cors());
//conection
const connect = require('./src/config/db');
app.use(express.json());
const PORT = process.env.PORT || 9900;
//End Points
 app.use('/', student);
 app.use('/', task);
 //connection
app.listen(PORT, async () => {
    console.log("starting");
    await connect();
    console.log("listening to port", PORT);
})