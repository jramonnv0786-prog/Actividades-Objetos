/**
 * @file Ejercicio 8: Encapsulación con propiedades privadas.
 * @author Jose Ramón Neira Vega
 */

/**
 * Caja fuerte con un código secreto que solo se puede consultar
 * o cambiar a través de sus propios métodos.
 */
class CajaFuerte {
    // Código secreto: con # solo se puede usar dentro de la clase.
    #codigo;

    /**
     * Crea la caja fuerte con su dueño y su código de apertura.
     * @param {string} propietario - Nombre del dueño de la caja.
     * @param {number} codigoInicial - Código de 4 dígitos con el que se crea.
     */
    constructor(propietario, codigoInicial) {
        this.propietario = propietario;
        this.#codigo = codigoInicial;
    }

    /**
     * Devuelve el código secreto de la caja.
     * @returns {number} El código actual.
     */
    verCodigo() {
        return this.#codigo;
    }

    /**
     * Cambia el código, pero solo si el nuevo tiene exactamente 4 dígitos.
     * @param {number} nuevoCodigo - Código que se quiere poner.
     * @returns {void}
     */
    cambiarCodigo(nuevoCodigo) {
        // Lo paso a texto para poder contar cuántos dígitos tiene.
        const texto = String(nuevoCodigo);

        if (texto.length === 4 && !isNaN(nuevoCodigo)) {
            this.#codigo = nuevoCodigo;
            console.log("Código cambiado correctamente.");
        } else {
            console.log("El código debe tener 4 dígitos. No se ha cambiado.");
        }
    }
}

// Caja de Ana con el código 1234.
const miCaja = new CajaFuerte("Ana", 1234);

// Consulto el código con el método público.
console.log("Propietario:", miCaja.propietario);
console.log("Código actual:", miCaja.verCodigo());

// Cambio el código a 5678 y compruebo que se ha guardado.
miCaja.cambiarCodigo(5678);
console.log("Código nuevo:", miCaja.verCodigo());

// Pruebo con un código que no tiene 4 dígitos: no debería cambiar.
miCaja.cambiarCodigo(12);
console.log("Código tras el intento fallido:", miCaja.verCodigo());

// Intento leer el código desde fuera de la clase.
// Si escribo miCaja.#codigo, el navegador da un SyntaxError y no se ejecuta nada del archivo,
// así que lo dejo comentado:
// console.log(miCaja.#codigo);
// Sin la # tampoco funciona: no existe ninguna propiedad pública llamada codigo.
console.log("Acceso desde fuera (miCaja.codigo):", miCaja.codigo);
