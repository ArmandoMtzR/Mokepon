//Se importo express
const express = require("express")
//Creacion de app
const app = express() 

const jugadores = []

class Jugador{
    constructor(id) {
        this.id = id
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
app.listen(8080, () => {
    console.log("Servidor funcionando") 
})