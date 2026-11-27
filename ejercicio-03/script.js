/**
 * @file Ejercicio 3: Referencias de objetos y clonación.
 * @author Jose Ramón Neira Vega
 */

// Objeto usuario1
const usuario1 = {
    nombre: "Antonio",
    edad: 22,
    email: "ejemploAntonio@gmail.com"
};

// Usuario2 apunta a Usuario1 para modificar la propiedad nombre.
const usuario2 = usuario1;
// Muestra el nombre original antes de modificar usuario2.
console.log("Nombre de usuario1 antes del cambio:", usuario1.nombre);
usuario2.nombre = "Neira";

// Muestra los dos objetos y compara si son el mismo.
console.log("usuario1 tras modificar usuario2:", usuario1);
console.log("usuario2:", usuario2);
console.log("¿usuario1 y usuario2 son el mismo objeto?:", usuario1 === usuario2);

// Objeto nuevo con los datos del usuario1.
const clon = Object.assign({}, usuario1);

// Cambia el email del clon.
clon.email = "Neiraejemplo@ilerna.com";

// Muestra el objeto original y el clon.
console.log("usuario1 tras modificar el clon:", usuario1);
console.log("clon:", clon);

// Compara si usuario1 y clon son el mismo objeto.
console.log("¿usuario1 y clon son el mismo objeto?:", usuario1 === clon);
