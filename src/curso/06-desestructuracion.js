// Desestructuracion
// Asignacion Desestructurante

const persona = {
    nombre: "Kevin",
    edad: 45,
    clave: "1234",
}

const { clave: pwd } = persona;

const personaContext = ({nombre,edad}) => (
    {
        nombreClave: nombre,
        anios: edad,
        mapa: {
            lat: 1.258,
            log: -9.365,
        }
    }
)

const advenger = personaContext(persona);
const { nombreClave, mapa: {lat,log} } = advenger;

console.log(nombreClave, lat, log);