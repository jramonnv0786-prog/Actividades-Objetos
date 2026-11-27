/**
 * @file Ejercicio 4: Métodos en objetos y uso de this.
 * @author Jose Ramón Neira Vega
 */

/**
 * Función constructora de objetos coche.
 * Se invoca con new: crea un objeto nuevo, enlaza this a él y lo devuelve.
 * @constructor
 * @param {string} name - Marca del coche.
 * @param {string} model - Modelo del coche.
 * @param {number} year - Año de fabricación.
 */
function Car(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
}

// Creación Coche 1
const myCar = new Car("KIA", "Sportage", 2024);
// Creación Coche 2
const myCar2 = new Car("KIA", "Ceed", 2020);

// Muestra los coches y comprueba que son instancias de Car.
console.log("Coche 1:", myCar);
console.log("Coche 2:", myCar2);
console.log("Modelo de coche 1:", myCar.model);
// instanceof pregunta: ¿este objeto se ha construido con el molde Car?
console.log("¿myCar es un Car?:", myCar instanceof Car);
