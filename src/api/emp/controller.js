const employee =require("./model")
exports.createEmpData= async(req,res)=>{
    console.log("create employee data")
    try{
        console.log("entered ")
        const {empid,name,gender,mobile,email,dob}=req.body
        const emp=new employee({
            empid:empid,
            name:name,
            gender:gender,
            mobile:mobile,
            email:email,
            dob:dob
            
        }
        )
        console.log("exit")
       const createEmp= await emp.save();
       res.status(201).send(createEmp)
    }
    catch(error){
        res.status(500).send(error)
    }
}