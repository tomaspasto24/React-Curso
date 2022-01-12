
const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
        ciudad: "New York",
        zip: 203124,
        lat: 23.23,
        lng: 50.32
    }
};

console.log(persona);

//Imprime un nuevo objeto con un atributo de tipo persona.
console.log({ persona:persona });
//Hace lo mismo que arriba, al tener mismo nombre obvia a la propiedad.
console.log({ persona });

//Imprime como una tabla.
console.table(persona);

//No copia el objeto persona a persona2, sino que copia solo la referencia al objeto.
const persona2 = persona;
persona2.nombre = "Peter";
//Como se ve el cambio del nombre del atributo cambia ambos objetos.
console.log(persona2);
console.log(persona);

//Forma de copiar un objeto. Se obtiene un clon del objeto.
persona2 = { ...persona }
