const express = require("express")
const http = require("http")
require("./dao/dbConnection")
const router=require("./api/emp/index")
const employee=require("./api/emp/model")

const app = express()
const server = http.createServer(app)
const port = 9000 | process.env.PORT
const ip ="localhost"

app.use(express.json())
app.use(router)
server.listen(port,ip,()=>{
    console.log("server listening on http://%s:%d",ip,port);
})

