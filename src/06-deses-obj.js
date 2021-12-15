//Desestructuración (asignación desestructurante).
const persona = {
    nombre: 'Tony',
    edad: 23,
    clave: 'Ironman'
};

//Desestructuración según los nombres de los atributos del objeto persona.
const { nombre:nombre2, edad, clave} = persona;

console.log(nombre2);
console.log(edad);
console.log(clave);

//Desestructuración desde el parámetro de la función. Rango tiene un objeto por defecto.
const useContext = ( { clave, nombre, edad, rango = 'Capitan'} ) => {
    // console.log(nombre, edad, rango)

    return {
        nombreClave: clave,
        anios: edad,
        coor: {
            lat: 213,
            lng: -21
        }
    }
};

//Desestructuración dentro de un objeto, de otro (coor).
const { nombreClave, anios, coor:{lat, lng} } = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);