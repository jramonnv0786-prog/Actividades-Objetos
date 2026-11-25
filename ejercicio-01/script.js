/**
 * @file Ejercicios 1 y 2: Creación y acceso a objetos y recorrido con forEach.
 * @author Jose Ramón Neira Vega
 */

/**
 * Estructura del objeto persona.
 * @typedef {Object} Persona
 * @property {string} nombre - Nombre de la persona.
 * @property {number} edad - Edad en años.
 * @property {string} [trabajo] - Profesión. Se elimina en el ejercicio 1.
 * @property {string} [pais] - País de residencia. Se añade en el ejercicio 1.
 */

/**
 * Objeto persona con sus datos iniciales.
 * Se modifica durante el ejercicio 1 y se reutiliza en el ejercicio 2.
 * @type {Persona}
 */
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

/**
 * Indica si el objeto persona tiene la propiedad nombre.
 * Empieza en false y pasa a true si el bucle la encuentra.
 * @type {boolean}
 */
let nombre = false;

/**
 * Indica si el objeto persona tiene la propiedad apellido.
 * Empieza en false y pasa a true si el bucle la encuentra.
 * @type {boolean}
 */
let apellido = false;

//Recorre el objeto persona.
 Object.keys(persona).forEach(function (clave) {    
    //Recorre cada propiedad primero nombre
    if (clave === "nombre" ) {
        nombre = true;
    }
});

// Muestra si existe la propiedad nombre.
mostrar("Existe la propiedad nombre:", nombre);
    
