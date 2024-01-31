let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto) {
    let parrafo = document.querySelector(elemento);
    parrafo.innerHTML = texto;    
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo ) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se asignaron todos los números posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generaNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','Digita un número del 1 al ' + numeroMaximo);
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja input
    limpiarCaja();
    /*Indicar mensajes inciales
    Inicializar el numero de intentos
    Generar numeros aleatorios */
    condicionesIniciales();
    //Deshabilitar boton de iniciar nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();