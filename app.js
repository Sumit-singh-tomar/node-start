const http = require("http")

const server = http.createServer((req,res)=>{
    console.log("Sumit Singh Tomar")
    res.write("hello sumit singh tomar")
})

server.listen(4000)