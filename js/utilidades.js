/**
 * @file Utilidades comunes a todos los ejercicios.
 * Muestra cada resultado en la consola y también en la propia página,
 * para que se pueda comprobar el ejercicio sin abrir las herramientas
 * de desarrollo.
 * @author Jose Ramón Neira Vega
 */

/**
 * Muestra un resultado en la consola y lo añade a la lista #salida de la página.
 * Los objetos se convierten a texto con JSON.stringify() para poder leerlos en
 * la página; en la consola se muestran tal cual, con todas sus propiedades.
 *
 * Nota: JSON.stringify() ignora los métodos, las claves Symbol y las propiedades
 * privadas (#). Para ver el resultado de toString(), pasa String(objeto).
 *
 * @param {string} etiqueta - Texto que explica qué se está mostrando.
 * @param {*} [valor] - Valor que se quiere mostrar (opcional).
 * @returns {void}
 */
function mostrar(etiqueta, valor) {
    const salida = document.getElementById("salida");
    const elemento = document.createElement("li");
    let texto = etiqueta;

    // Consola: se pasa el valor original para poder inspeccionarlo
    if (arguments.length > 1) {
        console.log(etiqueta, valor);
    } else {
        console.log(etiqueta);
    }

    // Página: el valor se convierte a texto legible
    if (arguments.length > 1) {
        if (typeof valor === "object" && valor !== null) {
            texto = etiqueta + " " + JSON.stringify(valor);
        } else {
            texto = etiqueta + " " + String(valor);
        }
    }

    // textContent (no innerHTML) para que nada se interprete como HTML
    elemento.textContent = texto;
    salida.appendChild(elemento);
}
