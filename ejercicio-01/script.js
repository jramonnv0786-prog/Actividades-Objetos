/**
 * @file Ejercicio 1: Creación y acceso a objetos.
 * @author Jose Ramón Neira Vega
 */

// Crea el objeto persona con sus datos.
const persona = {
    nombre: "Ana",
    edad: 28,
    trabajo: "Ingeniera",
};

// Muestra el nombre y la edad de la persona.
mostrar("Nombre:", persona.nombre);
mostrar("Edad:", persona.edad + " años.");

// Muestra el objeto completo antes de modificarlo.
mostrar("Objeto inicial:", persona);

// Añade la propiedad pais y elimina la propiedad trabajo.
persona.pais = "España";
delete persona.trabajo;

// Muestra el objeto completo después de los cambios.
mostrar("Objeto modificado:", persona);

// Muestra la edad accediendo a la propiedad.
mostrar("Edad", persona["edad"]);
