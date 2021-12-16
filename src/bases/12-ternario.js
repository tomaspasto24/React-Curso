
const activo = true;

// Una forma de hacerlo:

// let mensaje = '';

// if (activo)
// {
//     mensaje = 'activo';
// }
// else
// {
//     mensaje = 'inactivo';
// }

// Operador ternario: (condicion) ? -si es verdadero- : -si es falso-;
// const mensaje = (activo) ? 'Activo' : 'Inactivo';

// En caso de ser negativa la condicion que no haga nada, null.
// const mensaje = ( activo ) ? 'Activo' : null;

// Si activo es true, el string 'Activo' se asigna al mensaje, en caso contrario se asigna false.
const mensaje = activo && 'Activo';

console.log(mensaje);