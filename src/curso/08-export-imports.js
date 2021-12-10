import heroes, { owners } from "../data/heroes";

const getHeroeById = (id) => {
    return heroes.find(e => e.id === id);
}

const getHeroeByOwner = (owner) => {
    return heroes.filter(e => e.owner === owner);
}

// console.log( getHeroeById(1) );

// console.log( getHeroeByOwner('DC') );

// console.log( owners )

export {
    getHeroeById,
    getHeroeByOwner,
    owners
}