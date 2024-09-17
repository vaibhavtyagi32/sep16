const mongoose=require("mongoose");
const schema=mongoose.Schema;
const StudentSchema=new schema({
    rollno : {type:Number},
    name :{type:String},
    fathername :{type:String},
    adharcardno : {type:String},
    mobileno :{type:String}
})
module.exports=mongoose.model('student',StudentSchema);