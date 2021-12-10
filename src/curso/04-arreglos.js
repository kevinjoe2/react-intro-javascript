// Arreglos en JS

//const arreglo = new Array();
const arreglo = [1,2,3,4];
// No es recomendable usar push porque modifica el objeto principal
//arreglo.push(1);

const arreglo2 = [ ...arreglo,5 ];

const arreglo3 = arreglo2.map((n)=>n*2);

console.log( arreglo );

console.log( arreglo2 );

console.log( arreglo3 );