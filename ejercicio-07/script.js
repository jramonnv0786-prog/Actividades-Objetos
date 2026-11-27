/**
 * @file Ejercicio 7: Herencia de clases.
 * @author Jose Ramón Neira Vega
 */

/**
 * Clase base que representa un vehículo genérico.
 * Las clases hijas (como Car) heredan sus propiedades y métodos.
 */

class Vehicle {
    /**
     * Crea un vehículo e inicializa su nombre.
     * @param {string} name - Nombre del vehículo.
     */
    constructor(name) {
        // Se ejecuta automáticamente con new: inicializa las propiedades
        this.name = name;
    }

    /**
     * Muestra un mensaje genérico indicando que el vehículo se mueve.
     * @returns {void}
     */
    move() {
        console.log(this.name + " se está moviendo");
    }
}

/**
 * Clase hija de Vehicle que representa un coche.
 * Hereda name y move(), sobrescribe move() y añade model e info().
 * @extends Vehicle
 */

class Car extends Vehicle {
    /**
     * El nombre lo inicializa el constructor de Vehicle.
     * @param {string} name - Marca
     * @param {string} model - Modelo
     */
    constructor(name, model) {
        super(name); // Llama al constructor de Vehicle, que guarda this.name
        this.model = model;
    }

    /**
     * Sobrescribe el método move() de Vehicle con un mensaje propio del coche.
     * @returns {void}
     */
    move() {
        console.log(this.name + " is Rolling out!");
    }

    /**
     * Muestra el nombre y el modelo del coche.
     * @returns {void}
     */
    info() {
        console.log("Nombre: " + this.name + ", modelo: " + this.model);
    }
}

// Crea el coche con los datos del enunciado.
const myCar = new Car("Toyota", "BZ4X");

// move() Es el sobrescrito en Car, info() es propio de Car.
myCar.move();
myCar.info();
