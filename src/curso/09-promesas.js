import { getHeroeByOwner } from "./curso/08-export-imports";

const miPrimeraPromise = new Promise((resolve, reject) => {
    // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
    // En este ejemplo, usamos setTimeout(...) para simular código asíncrono.
    // En la vida real, probablemente uses algo como XHR o una API HTML5.
    console.log("Inicio");
    setTimeout(function(){
        const heroes = getHeroeByOwner('DC');
        if ( heroes.length === 0 ) { reject("No se encontraron Heroes"); }
        resolve( heroes ); // ¡Todo salió bien!
    }, 2000);

});

const getHeroesByOwner = ( owner ) => {
    return new Promise((resolve, reject) => {
        console.log("Inicio");
        setTimeout(function(){
            const heroes = getHeroeByOwner(owner);
            if ( heroes.length === 0 ) { reject("No se encontraron Heroes"); }
            resolve( heroes ); // ¡Todo salió bien!
        }, 2000);
    
    });
}

miPrimeraPromise.then((successMessage) => {
    // succesMessage es lo que sea que pasamos en la función resolve(...) de arriba.
    // No tiene por qué ser un string, pero si solo es un mensaje de éxito, probablemente lo sea.
    console.log( 'Heroes', successMessage );
    console.log("FIN");
}).catch( err => console.warn( err ) );

getHeroesByOwner('AA')
    .then( console.log )
    .catch( console.warn );