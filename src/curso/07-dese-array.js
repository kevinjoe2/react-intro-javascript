// Desestructuracion con Arreglos

const personajes = ["Goku","Vegeta","Trunks"];
const [ goku ] = personajes;
const [ ,vegeta ] = personajes;
console.log(goku,vegeta);

const retornaArreglo = () => ["ABC", 123];

const [ letras, numeros ] = retornaArreglo();
console.log(letras,numeros);

const dsa = (valor) => {
    return [ valor, () => {console.log("Set Nombre")} ];
};
const [ nombre, setNombre ] = dsa("KEvin");
console.log(`${nombre}`);
setNombre();