require ("dotenv").config()
const fs = require("fs")
const http = require ("http")
function requestController(req, res){
   const url = req.url
   const method = req.method
   
   if (method === "GET" && url === "/") {
      res.setHeader("Content-Type", "text/html; charset=UTF-8")
      fs.readFile('./public/index.html', function (err,file){
         if (err) {
            console.log("hubo un error")
         }
         res.write(file)
         res.end()
      })
            return
   }
   if (method === "GET" && url === "/about") {
      console.log({url, method})
      res.setHeader("Content-Type", "text/html; charset=UTF-8")
      fs.readFile("./public/about.html", function (err , file){
         if (err) {
            console.log("hubo un error")
         }
         res.write(file)
         res.end()
      })
            return
   }
}
//configurar nuestro servidor
const server = http.createServer(requestController)
const PORT = process.env.PORT
server.listen(PORT, function(){
   console.log("APLICACION CORRIENDO EN PUERTO:"+ PORT)
}) 
