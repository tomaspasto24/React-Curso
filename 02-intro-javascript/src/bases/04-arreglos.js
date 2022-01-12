//Arreglos
const arreglo1 = new Array();
const arreglo2 = new Array(100); //arreglo de 100 posiciones con .push() se puede agregar mas posiciones
const arreglo3 = [];

// arreglo3.push(1);
// arreglo3.push(2);
// arreglo3.push(3);
// arreglo3.push(4);

const arreglo4 = [1, 2, 3, 4];

const arreglo5 = [ ...arreglo4, 5];

const arreglo6 = arreglo5.map(function(numero) {
    return numero * 2;
});

console.log(arreglo5);
console.log(arreglo6);