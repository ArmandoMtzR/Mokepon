//Se importo express
const express = require('express')
const cors = require('cors')
//Creacion de app
const app = express() 

app.use(cors())
app.use(express.json())

const jugadores = []

class Jugador{
    constructor(id) {
        this.id = id
    }
    asignarMokepon(mokepon){
        this.mokepon = mokepon
    }
}

class Mokepon {
    constructor(nombre){
        this.nombre = nombre
    }
}

//Cuando se crea una peticion 
app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`

    const jugador = new Jugador(id)
    jugadores.push(jugador)

    res.setHeader("Access-Control-Allow-Origin", "*")

    res.send(id) 
})
//Aqui se mantiene escuchando el servidor

app.post("/mokepon/:jugadorId", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.mokepon || ""
    const mokepon = new Mokepon(nombre)

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if(jugadorIndex >= 0) {
        jugadores[jugadorIndex].asignarMokepon(mokepon)
    }

    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

app.listen(8080, () => {
    console.log("Servidor funcionando") 
})