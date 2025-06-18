let pisoAsensor = 1
let pasajeroAsensor = 0
let paradasasensor = 0
let tiempo = 0
let interval
let interval2
class Persona
{
    constructor(nombre, pisoInicial, pisoFinal) {
        this.nombre = nombre;
        this.pisoInicial = pisoInicial;
        this.pisoFinal = pisoFinal;
    }
}
const me = new Persona
(
    "Yo", 
    2,
    10
);
const Carla = new Persona
(
    "Carla", 
    3,
    4
);
const Pedro = new Persona
(
    "Pedro", 
    5,
    1
);
const Juana = new Persona
(
    "Juana", 
    8,
    7
);


const personas = [me, Carla, Pedro, Juana];
console.log(personas)
let personasEnAscensor =[]

const pisos = [1,2,3,4,5,6,7,8,9,10]

function sigoSibuendoOno (){
    personas.some(persona => {
        if (persona.pisoInicial != 'Recogido' || pisoAsensor<=persona.pisoFinal){
            revisionPisosSubida()
                    console.log('Piso Asensor: '+pisoAsensor)
            return true; // Esto rompe el ciclo
        }    
        return false; // Continúa iterando
    });
}
function subirUnPiso() {
            if (pisoAsensor==10){
            clearInterval(interval)
        }
        personas.forEach(persona => {      
            if (persona.pisoInicial == pisoAsensor){
                persona.pisoInicial = 'Recogido'
                pasajeroAsensor++
                paradasasensor++
                personasEnAscensor.push(persona)
            }
        });
        personasEnAscensor.forEach(persona => {
            if (persona.pisoFinal == pisoAsensor){
                persona.pisoFinal = 'Entregado'
                pasajeroAsensor--
                paradasasensor++
            }
        });
        if (pisoAsensor<10){
            pisoAsensor++
        }

}
function sigoBajandoOno (){
    personas.some(persona => {
        if (persona.pisoFinal != 'Entregado'){
            revisionPisosbajada()
                        console.log('Piso Asensor: '+pisoAsensor)
            return true; // Esto rompe el ciclo
        }    
        return false; // Continúa iterando
    });
}

function activarIntervalo(){
     interval = setInterval(sigoSibuendoOno,50)
}
function activarIntervalo2(){
     interval2 = setInterval(sigoBajandoOno,50)
}
console.log('Tiempo: '+tiempo)

function revisionPisosSubida(){
        subirUnPiso()
        tiempo++
    console.log('Paradas Ascensor: '+paradasasensor)
}
function revisionPisosbajada(){
        bajarUnPiso()
        tiempo++
    console.log('Paradas Ascensor: '+paradasasensor)
}

function bajarUnPiso() {
            if (pisoAsensor==1){
            clearInterval(interval2)
        }
    personas.forEach(persona => {
        if (persona.pisoFinal == pisoAsensor){
            persona.pisoFinal = 'Entregado'
            pasajeroAsensor--
            paradasasensor++
        }
        });
        if (pisoAsensor>1){
            pisoAsensor--
        }

}
function mostrarMensajeFinal(){
    console.log('Todos los pasajeros fueron entregados')
}
