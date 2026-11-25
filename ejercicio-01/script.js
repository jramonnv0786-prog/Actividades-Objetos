/**
 * @file Ejercicios 1 y 2: Creación y acceso a objetos y recorrido con forEach.
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


// ----------------------------------------------------------------------------------------------------------------


//2º.PUNTO Foreach.

//Variables inicializadas en false.
let nombre = false;
let apellido = false;

//Recorre el objeto persona.
 Object.keys(persona).forEach(function (clave) {    
    //Recorre cada propiedad primero nombre
    if (clave === "nombre" ) {
        nombre = true;
    }
});

//Muestra SI existe la propiedad nombre.
mostrar("Existe la propiedad nombre:", nombre);
    
