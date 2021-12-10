
const persona = {
    nombre: "Kevin",
    apellido: "Chamorro",
    edad: 25,
    direccion: {
        ciudad: "Quito"
    }
}

//console.table( persona );
console.log( persona );

const persona2 = {...persona};
persona2.nombre = "Juan";

console.log( persona );
console.log( persona2 );
