// Funciones JS

// FORMA 1

function saludo1( nombre ) {
    return `Hola ${nombre}`;
}

// FORMA 2

const saludo2 = function( nombre ) {
    return `Hola ${nombre}`; 
}

// FORMA 3

const saludo3 = ( nombre ) => {
    return `Hola ${nombre}`; 
}

// FORMA 4

const saludo4 = ( nombre ) => `Hola ${nombre}`;

// Cuando se reporte un objeto utilizar ()

const funPersona = ( nombre ) => ({nombre,uid:'ABC123'});

const persona = funPersona("Kevin");

console.log(persona);