const Student = require("../models/student");

async function addStudent(req,res){
    try{
        console.log(req.body,'req.body');
        let student=new Student(req.body);
        await student.save();
        console.log("data saved.....") 
        res.end("ended....");
    }catch(err){
        console.log(err);
    }
}
async function getStudents(req,res){
    try{
        let students=await Student.find({});
        console.log(students,"student");
        res.send(students);
    }catch(err){
        console.log(err);
    }
}
module.exports={
    addStudent,
    getStudents
}