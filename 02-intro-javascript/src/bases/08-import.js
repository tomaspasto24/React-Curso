// Forma de hacer importaciones, siempre que lo que se traiga tenga la palabra clave export.
// Con escribir la palabra del objeto, ejemplo heroes y darle a TAB se importa automaticamente.
// en caso de ser con export:
// import { heroes } from '../data/heroes';

//En caso de que el objeto tenga export default:
// import heroes from '../data/heroes';

//En caso de tener una exportanción default (heroes) y una exportación con desestructuración (owners).
import heroes, { owners } from '../data/heroes';

// console.log(owners);

export const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id == id);
}
//Otra forma:
// const getHeroeById = (id) => heroes.find(heroe => heroe.id == id);

// console.log(getHeroeById(1));

//Filtrar muchos elementos.
const getHeroresByOwner = (owner) => {
    return heroes.filter(heroe => heroe.owner.toLocaleLowerCase() === owner.toLocaleLowerCase());
}

// console.log(getHeroresByOwner('dc'));