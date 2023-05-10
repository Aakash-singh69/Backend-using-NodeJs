const mongoose= require('mongoose');

const empSchema=new mongoose.Schema({
    empid:{type:Number,max:999,unique:true,require:true},
    name:{type:String,max:128,require:true},
    gender:{type:String,max:6,require:true},
    mobile:{type:Number,max:10,unique:true,require:true},
    email:{type:String,max:128,unique:true,require:true,match:/^\S+@\S+\.\S+$/},
    dob:{type:String,max:20,require:true,match:/^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/}
})

const employee =new mongoose.model("empcollections",empSchema)
module.exports=employee