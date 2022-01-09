const mongoose = require("mongoose");

const students =  mongoose.Schema({ 
    name:{type:"string", required: true}, 
    city: {type:"string", required: true},
    age: {type:"number", required: true},
    education: {type:"string", required: true},
    gender: {type:"string", required: true},
    contact: {type:"number", required: true}
},{
    timestamps: true,

})


const Student = mongoose.model('students',students);
module.exports = Student;

