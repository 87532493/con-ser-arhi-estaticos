require ("dotenv").config()
const http = require ("http")
function requestController(){
   console.log("HOLA MUNDO")
}
//configurar nuestro servidor
const server = http.createServer(requestController)
const PORT = process.env.PORT
server.listen(PORT, function(){
   console.log("APLICACION CORRIENDO EN PUERTO:"+ PORT)
}) 
