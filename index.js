const http = require ("http")
const { CLIENT_RENEG_LIMIT } = require("tls")
function requestController(){
   console.log("recibimos una nueva request")
}
//configurar nuestro servidor
const server =http.createServer(requestController)
server.listen(4000) 