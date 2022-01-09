require("dotenv").config();
const mongoose = require("mongoose");
const express = require('express');
const cors = require('cors')

const student = require('./src/controllers/student_controller')
const task = require('./src/controllers/taskController')
const app = express();
app.use(cors());

const connect = require('./src/config/db');
app.use(express.json());
const PORT = process.env.PORT || 9900;
 app.use('/', student);
 app.use('/', task);
app.listen(PORT, async () => {
    console.log("starting");
    await connect();
    console.log("listening to port", PORT);
})