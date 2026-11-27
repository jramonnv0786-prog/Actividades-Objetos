/**
 * @file Ejercicio 6: Conversión de objetos a valores primitivos.
 * @author Jose Ramón Neira Vega
 */

// Crea la cuenta bancaria con su saldo.
const cuentaBancaria = {
    saldo: 1000,
    // Método toString: define cómo se convierte el objeto en texto.
    toString: function () {
        return "Saldo de: " + this.saldo + " EUR";
    },
};

// Convierte el objeto en texto: String() llama a toString().
console.log("Cuenta bancaria ->", String(cuentaBancaria));