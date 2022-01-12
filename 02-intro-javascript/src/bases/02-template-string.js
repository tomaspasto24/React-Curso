const nombre = "Tomas";
const apellido = "Silva Pastorini";

// const nombreCompleto = nombre + " " + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);


function Saludo(nombre)
{
    return `Hola mundo ${nombre}`;
}

console.log(`Este es un texto: ${Saludo(nombre)}`);