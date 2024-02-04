const http = require("http")

const server = http.createServer((req,res)=>{
    console.log("Sumit Singh Tomar")
    // res.write("hello sumit singh tomar")
    process.exit()
})

server.listen(4000)