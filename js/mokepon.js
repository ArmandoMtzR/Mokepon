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

const sectionVerMapa = document.getElementById("verMapa")
const mapa = document.getElementById("mapa")

let jugadorId = null 
let mokepones = [] 
let ataqueJugador =[]
let ataqueEnemigo = []
let opcionMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let mascotaJugadorObjeto
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
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './img/mokemap.png'
let alturaBusqueda
let anchoMapa = window.innerWidth - 20
const anchoMaximoMapa = 350

if (anchoMapa > anchoMaximoMapa){
    anchoMapa = anchoMaximoMapa - 20
}

alturaBusqueda = anchoMapa * 600 / 800

mapa.width = anchoMapa
mapa.height = alturaBusqueda

class Mokepon{
    constructor(nombre, foto, vida, fotoMapa) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let hipodoge = new Mokepon("Hipodoge", "./img/Cheemspng.png", 5, "./img/Cheemspng.png")
let capipepo = new Mokepon("Capipepo", "./img/Capi.png", 5, "./img/Capi.png")
let ratigueya = new Mokepon("Ratigueya", "./img/ratapik.png", 5, './img/ratapik.png')
let hornato = new Mokepon("Hornato", "./img/images.png", 5, './img/images.png')
let axolarto = new Mokepon("Axolarto", "./img/axol.png", 5, './img/axol.png')

let hipodogeEnemigo = new Mokepon("Hipodoge", "./img/Cheemspng.png", 5, "./img/Cheemspng.png")
let capipepoEnemigo = new Mokepon("Capipepo", "./img/Capi.png", 5, "./img/Capi.png")
let ratigueyaEnemigo = new Mokepon("Ratigueya", "./img/ratapik.png", 5, './img/ratapik.png')
let hornatoEnemigo = new Mokepon("Hornato", "./img/images.png", 5, './img/images.png')
let axolartoEnemigo = new Mokepon("Axolarto", "./img/axol.png", 5, './img/axol.png')


hipodoge.ataques.push(
    {nombre: "Agua", id: "botonAgua"},
    {nombre: "Agua", id: "botonAgua"},
    {nombre: "Agua", id: "botonAgua"},
    {nombre: "Fuego", id: "botonFuego"},
    {nombre: "Tierra", id: "botonTierra"},
)

hipodogeEnemigo.ataques.push(
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

capipepoEnemigo.ataques.push(
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

ratigueyaEnemigo.ataques.push(
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

hornatoEnemigo.ataques.push(
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

axolartoEnemigo.ataques.push(
    {nombre: "Agua", id: "botonAgua"},
    {nombre: "Agua", id: "botonAgua"},
    {nombre: "Agua", id: "botonAgua"},
    {nombre: "Tierra", id: "botonTierra"},
    {nombre: "Tierra", id: "botonTierra"},
)

mokepones.push(hipodoge, capipepo, ratigueya, hornato, axolarto)

function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = "none"
    sectionVerMapa.style.display = "none"

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

    unirseJuego()
}

function unirseJuego(){
    fetch("http://localhost:8080/unirse")
        .then(function(res) {
            if(res.ok){
                res.text()
                .then(function(respuesta) {
                    console.log(respuesta)
                    jugadorId = respuesta
                })
            }
        })
}

function seleccionarMascotaJugador(){

    sectionSeleccionarMascota.style.display = "none"

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

    seleccionarMokepon(mascotaJugador)

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = "flex"
    iniciarMapa()
}

function seleccionarMokepon(mascotaJugador){
    fetch(`http://localhost:8080/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    })
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
    botones = document.querySelectorAll(".BAtaque")

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

function seleccionarMascotaEnemigo(enemigo){
    
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
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

function pintarCanvas(){

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    hornatoEnemigo.pintarMokepon()
    axolartoEnemigo.pintarMokepon()
    if(mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0 )
    {
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(hornatoEnemigo)
        revisarColision(axolartoEnemigo)
    }
}

function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 5
}

function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -5
}

function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 5
}

function moverArriba(){
    mascotaJugadorObjeto.velocidadY = -5
}

function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break;       
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa(){

    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener("keydown", sePresionoTecla)

    window.addEventListener("keyup", detenerMovimiento)
}

function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
        
    }
}

function revisarColision(enemigo){

    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const izquierdaEnemigo = enemigo.x
    const derechaEnemigo = enemigo.x + enemigo.ancho

    const arribaMascota = mascotaJugadorObjeto.y + 25
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto -25
    const izquierdaMascota = mascotaJugadorObjeto.x + 25
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho -25

    if(abajoMascota < arribaEnemigo || arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo || izquierdaMascota > derechaEnemigo)
        {
            return
        }
    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
}

window.addEventListener("load", iniciarJuego) 