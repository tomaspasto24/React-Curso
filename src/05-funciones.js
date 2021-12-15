
// No se deben crear funciones de esta manera porque es muy facil asignar a Saludar cualquier valor que no sea una funcion. Como
// por ejemplo Saludar = 30. Y no daria error.
function Saludar(nombre)
{
    return `Hola, ${nombre}`;
}

console.log(Saludar('Goku'));

//La forma en la que se debe crear una funcion es la siguiente

const saludo = function (nombre) 
{
    return `Hola, ${nombre}`;
}

console.log(saludo('vegetta'));

//Funcion de flecha

const saludo2 = (nombre) => {
    return `Hola, ${nombre}`;
}

console.log(saludo2('goku'));

//Forma más eficiente de hacer la función de flecha.
const saludo3 = (nombre) => `Hola, ${nombre}`;

console.log(saludo3('Gokuneta'));

//Devolver un objeto en un a función.
const getUser = () => {
    return {
        uid: 'abcs231',
        username: 'Tomy2404'
    }
};

//Especificamos con los () que los parentesis no son cuerpo de función sino que se quiere devolver un objeto.
const getUser2 = () => ({
    uid: 'abcs231',
    username: 'Tomy2404'
});

console.log(getUser());
console.log(getUser2());


//Tarea
// 1. Transformar en función de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

const usuarioActivo = (nombre) => ({
        uid: 'ABSD2923',
        username: nombre
});

console.log(usuarioActivo('fernando'));