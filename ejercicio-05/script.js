/**
 * @file Ejercicio 5: Symbol y claves ocultas.
 * @author Jose Ramón Neira Vega
 */

// Crear Símbolo "id".
const id = Symbol("id");

// Objeto empleado.
const empleado = {
    nombre: "Miguel Ángel",
    puesto: "Gerente",
};

// Añadimos la propiedad id usando el símbolo como clave.
empleado[id] = 1234;

// Recorre las propiedades con for...in: la clave Symbol no aparece.
for (const clave in empleado) {
    console.log(clave + ":", empleado[clave]);
}

// La propiedad existe: se accede a ella directamente con el símbolo.
console.log("id (clave Symbol, oculta en el bucle):", empleado[id]);
