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
            console.log('Piso Asensor: '+pisoAsensor)
            revisionPisosSubida()
            return true; // Esto rompe el ciclo
        }  
    });
}
function revisionPisosSubida(){
        personas.forEach(persona => {      
            if (persona.pisoInicial == pisoAsensor){
                persona.pisoInicial = 'Recogido'
                pasajeroAsensor++
                paradasasensor++
                console.log('Paradas Ascensor: '+paradasasensor)
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
        tiempo++
    sigoSibuendoOno()
}
function sigoBajandoOno (){
    personas.some(persona => {
        if (persona.pisoFinal != 'Entregado'){
            console.log('Piso Asensor: '+pisoAsensor)
            revisionPisosbajada()
            return true; // Esto rompe el ciclo
        }    
        mostrarMensajeFinal();
    });
}
function revisionPisosbajada(){
    personas.forEach(persona => {
        if (persona.pisoFinal == pisoAsensor){
            persona.pisoFinal = 'Entregado'
            pasajeroAsensor--
            paradasasensor++
            console.log('Paradas Ascensor: '+paradasasensor)
        }
        });
        if (pisoAsensor>1){
            pisoAsensor--
        }
        tiempo++
    sigoBajandoOno()
}

function mostrarMensajeFinal(){
    personas.forEach(persona => {
        if (persona.pisoFinal != 'Entregado'){
            console.log(`${persona.nombre} no fue entregado en el piso ${persona.pisoFinal}`);
        }
})
}