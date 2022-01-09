const express = require('express')
const mongoose = require("mongoose");
const Task = require("../models/task");
const db = require("../config/db")
const router = express.Router();

router.post('/add',async(req, res)=>{
    // try {
        let del = await Task.deleteMany({})
       const stu = await Task.create(req.body)
       return res.status(201).send({stu});
    
})


router.post('/update', async (req,res)=>{
    let d =await Task.findOneAndUpdate({id : 1},
        {$set : {task : req.body.task}})

        return res.status(201).send({message : "Successfully Updated"})
})

module.exports = router;