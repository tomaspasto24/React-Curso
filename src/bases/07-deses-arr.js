
const personajes = ['Goku', 'Vegeta', 'Trunks'];

//Toma a Goku como p1 porque es el primer objeto
const [ p1 ] = personajes;
//Toma a Vegeta como p2 y Trunks como p3 por las comas vacias.
const [ , p2 ] = personajes;
const [ , , p3 ] = personajes;

console.log(p1);
console.log(p2);
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const useState = (valor) => {
    return [
        valor,
        () => {console.log(`Hola mundo`)}
    ];
}

//Tarea

const [nombre, setNombre] = useState('Goku');

console.log(nombre);
setNombre();