const nombre = "Kevin";
const apellido = "Chamorro";

const nombreCompleto = `${nombre} ${apellido}`;

console.log(`${nombre} 
${apellido}
${1+1}
`);

function getSaludo( nombre ) {
    return `Hola ${nombre}`;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`)
