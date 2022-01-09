const express = require('express')
const mongoose = require("mongoose");
const Student = require("../models/students");

const router = express.Router();

router.post('/students',async(req, res)=>{
    // try {
       const stu = await Student.create(req.body)
       return res.status(201).send({stu});
    // }catch(e){
    //     res.sendStatus(404);
    // }
})

module.exports = router;