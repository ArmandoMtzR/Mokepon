const sectionReiniciarJuego = document.getElementById("Reiniciar")

const botonMascotaJugador = document.getElementById('botonMascota')


const botonReiniciar = document.getElementById("reiniciar")

const sectionSeleccionarMascota = document.getElementById("selectionMascota")
const sectionSeleccionarAtaque = document.getElementById("selectionAtaque")

const spanMascotaJugador = document.getElementById("mascotaJugador")
const spanMascotaEnemigo = document.getElementById("mascotaEnemigo")

const spanVidasJugador = document.getElementById("vidasJugador")
const spanVidasEnemigo = document.getElementById("vidasEnemigo")

const sectionMensajes = document.getElementById("resultado")
const resulAtaquesJugador = document.getElementById("resulAtaquesJugador")
const resulAtaquesEnemigo = document.getElementById("resulAtaquesEnemigo")

const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

let mokepones = [] 
let ataqueJugador =[]
let ataqueEnemigo = []
let opcionMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let contadorVidasJugador = 3
let contadorVidasEnemigo = 3

class Mokepon{
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon("Hipodoge", "./img/Cheemspng.png", 5)
let capipepo = new Mokepon("Capipepo", "./img/Capi.png", 5)
let ratigueya = new Mokepon("Ratigueya", "./img/ratapik.png", 5)
let hornato = new Mokepon("Hornato", "./img/images.png", 5)
let axolarto = new Mokepon("Axolarto", "./img/axol.png", 5)

hipodoge.ataques.push(
    {nombre: "Agua", id: "botonAgua"},
    {nombre: "Agua", id: "botonAgua"},
    {nombre: "Agua", id: "botonAgua"},
    {nombre: "Fuego", id: "botonFuego"},
    {nombre: "Tierra", id: "botonTierra"},
)

capipepo.ataques.push(
    {nombre: "Tierra", id: "botonTierra"},
    {nombre: "Tierra", id: "botonTierra"},
    {nombre: "Tierra", id: "botonTierra"},
    {nombre: "Agua", id: "botonAgua"},
    {nombre: "Fuego", id: "botonFuego"},

)

ratigueya.ataques.push(
    {nombre: "Fuego", id: "botonFuego"},
    {nombre: "Fuego", id: "botonFuego"},
    {nombre: "Fuego", id: "botonFuego"},
    {nombre: "Agua", id: "botonAgua"},
    {nombre: "Tierra", id: "botonTierra"},
)

hornato.ataques.push(
    {nombre: "Tierra", id: "botonTierra"},
    {nombre: "Tierra", id: "botonTierra"},
    {nombre: "Tierra", id: "botonTierra"},
    {nombre: "Agua", id: "botonAgua"},
    {nombre: "Agua", id: "botonAgua"},
)

axolarto.ataques.push(
    {nombre: "Agua", id: "botonAgua"},
    {nombre: "Agua", id: "botonAgua"},
    {nombre: "Agua", id: "botonAgua"},
    {nombre: "Tierra", id: "botonTierra"},
    {nombre: "Tierra", id: "botonTierra"},
)

mokepones.push(hipodoge, capipepo, ratigueya, hornato, axolarto)

function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = "none"

    mokepones.forEach((Mokepon) => {
        opcionMokepones = `
        <input type="radio" name="mascota" id=${Mokepon.nombre} >
        <label class="tarjetaMokepon" for=${Mokepon.nombre}>
            <p>${Mokepon.nombre}</p>
            <img src=${Mokepon.foto} alt=${Mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionMokepones

    inputHipodoge = document.getElementById("Hipodoge")
    inputCapipepo = document.getElementById("Capipepo")
    inputRatigueya = document.getElementById("Ratigueya")
    inputHornato = document.getElementById("Hornato")
    inputAxolarto = document.getElementById("Axolarto")

    })

    sectionReiniciarJuego.style.display = "none"

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonReiniciar.addEventListener("click", reiniciarJuego)

}

function seleccionarMascotaJugador(){

    sectionSeleccionarMascota.style.display = "none"
    sectionSeleccionarAtaque.style.display = "flex"

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    }
    else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    }
    else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }
    else if(inputHornato.checked){
        spanMascotaJugador.innerHTML = inputHornato.id
        mascotaJugador = inputHornato.id
    }
    else if(inputAxolarto.checked){
        spanMascotaJugador.innerHTML = inputAxolarto.id
        mascotaJugador = inputAxolarto.id
    }
    else{
        alert("No seleccionaste ninguna mascota")
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques 
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){

    ataques.forEach((ataque) => {
    ataquesMokepon = `
    <button id=${ataque.id} class="botonDeAtaque BAtaque">${ataque.nombre}</button>
    `
    contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById("botonFuego")
    botonAgua = document.getElementById("botonAgua")
    botonTierra = document.getElementById("botonTierra")
    botones =document.querySelectorAll(".BAtaque")

}

function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if(e.target.textContent === "Fuego"){
                ataqueJugador.push("FUEGO")
                console.log(ataqueJugador)
                boton.style.background = "#d04848"
                boton.disabled = true
            }else if(e.target.textContent === "Agua"){
                ataqueJugador.push("AGUA")
                console.log(ataqueJugador)
                boton.style.background = "#d04848"
                boton.disabled = true
            }else{
                ataqueJugador.push("TIERRA")
                console.log(ataqueJugador)
                boton.style.background = "#d04848"
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })

}

function seleccionarMascotaEnemigo(){
    
    let mascotaAleatorio = aleatorio(0, mokepones.length - 1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatorio].ataques
    secuenciaAtaque()

}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueAleatorioEnemigo(){

    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1)
    if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push("FUEGO")
    }
    else if(ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push("AGUA")     
    }
    else{
        ataqueEnemigo.push("TIERRA")
    }
    console.log(ataqueEnemigo)
    iniciarPelea()

}

function iniciarPelea(){
    if (ataqueJugador.length === 5){
        combate()
    }
}

function indexOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexOponentes(index, index)
            crearMensaje("Empate")
            victoriasJugador++
        }
        else if (ataqueJugador[index] === "FUEGO" && ataqueEnemigo[index] === "TIERRA") {
            indexOponentes(index, index)
            crearMensaje("Ganaste!!!")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }
        else if (ataqueJugador[index] === "AGUA" && ataqueEnemigo[index] === "FUEGO" ) {
            indexOponentes(index, index)
            crearMensaje("Ganaste!!!")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }
        else if (ataqueJugador[index] === "TIERRA" && ataqueEnemigo[index] === "AGUA") {
            indexOponentes(index, index)
            crearMensaje("Ganaste!!!")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }
        else{
            indexOponentes(index, index)
            crearMensaje("Perdiste :c")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    revisarVidas()
}   

function crearMensaje(resultado) {
    let nuevoAtaqueJugador = document.createElement("p")
    let nuevoAtaqueEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo
    

    resulAtaquesJugador.appendChild(nuevoAtaqueJugador)
    resulAtaquesEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function revisarVidas(){
    if(victoriasJugador === victoriasEnemigo){
        mensajeFinal("Esto fue un empate")
    }
    else if (victoriasJugador > victoriasEnemigo){
        mensajeFinal("Felicitaciones Ganaste :D")
    }else {
        mensajeFinal("Perdiste :C")
    }
}

function mensajeFinal(resultadoFinal) {

    sectionMensajes.innerHTML = resultadoFinal

    sectionReiniciarJuego.style.display = "block"
}

function reiniciarJuego() {
    location.reload()
}

window.addEventListener("load", iniciarJuego) 