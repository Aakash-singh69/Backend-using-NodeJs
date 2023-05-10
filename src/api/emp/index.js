const express=require("express")
const router =express.Router();
const employee=require("./model");
const { createEmpData } = require("./controller");

router.get("/",(req,res)=>{
    res.send("home")
})


router.post("/addemployee",createEmpData)

router.get("/emp1",(req,res)=>{
    res.send("emp1")
})
router.get("/emp2",(req,res)=>{
    res.send("emp2")
})
router.get("/emp3",(req,res)=>{
    res.send("emp3")
})

module.exports=router