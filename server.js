const express = require('express')

const server = express()

server.listen(2000)

server.get("/", function(request, response){
    //ACA HAY QUE PROGRAMAR LA RESPUESTA MAGICA... Woooo
    response.write("<h1>Hola clase desde Node.js!</h1>")
    response.write("<h2>Con demonios incluidos...</h2>")
    response.end("<p>Estamos viendo cosas 'server-side'... woooo</p>")
})