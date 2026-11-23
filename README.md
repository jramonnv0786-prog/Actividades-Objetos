# Actividades con objetos — Entorno Cliente

Desarrollo Web en Entorno Cliente · 2.º DAW · Jose Ramón Neira Vega

**Probar online:** [https://jramonnv0786-prog.github.io/Actividades-Objetos/](https://jramonnv0786-prog.github.io/Actividades-Objetos/)

## Cómo probarlo

- **Online:** abre el enlace de arriba y entra en cada ejercicio desde el índice.
- **En local:** abre la carpeta con Visual Studio Code y lanza `index.html` con la extensión Live Server.
- Los ejercicios 1 a 8 muestran su resultado **en la propia página** y en la **consola** del navegador (F12 → Consola).
- Ejercicio 10: **permite las ventanas emergentes** del sitio; si no, el navegador bloquea `window.open`.

| Ej. | Tema | Qué hacer | Resultado esperado |
|---|---|---|---|
| 1 | Creación y acceso a objetos | Abrir la página | Nombre y edad (punto), objeto con `pais` y sin `trabajo`, edad (corchetes) |
| 2 | Bucle forEach | Abrir la página | Existe `nombre`, no existe `apellido`; listado de claves y valores |
| 3 | Referencias y clonación | Abrir la página | El cambio en `usuario2` afecta a `usuario1`; el cambio en el clon no afecta al original |
| 4 | Constructor y `this` | Abrir la página | Objetos `Car` creados con `new` y sus propiedades |
| 5 | Symbol y claves ocultas | Abrir la página | `for...in` no muestra la clave `id`; sí se accede con `empleado[id]` |
| 6 | Conversión a primitivo | Abrir la página | `Saldo: 1000 EUR` |
| 7 | Herencia de clases | Abrir la página | `Toyota is Rolling out!` e información de nombre y modelo |
| 8 | Propiedades privadas | Abrir la página | Código 1234 → 5678; el acceso directo a `#codigo` no es posible |
| 10 | window, DOM y eventos | Escribir un nombre y pulsar **Saludar** | Mensaje en la página, alerta y ventana hija; cada mensaje desaparece a los 5 s |

## Estructura

```
├── index.html          → índice de ejercicios
├── css/styles.css      → estilos comunes
├── js/utilidades.js    → función mostrar(): resultado en consola y en la página
├── ejercicio-01/ … ejercicio-08/
│   ├── index.html
│   └── script.js
└── ejercicio-10/
    ├── index.html      → página principal
    ├── bienvenida.html → ventana de bienvenida (hija)
    └── script.js
```

## Bibliografía

- ILERNA. *4.4. JS: Objetos definidos por el usuario* (S. Montes Repiso).
- ILERNA. *3.5. Patrones de diseño en JS* (S. Montes Repiso).
- MDN Web Docs. [Trabajando con objetos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects)
- MDN Web Docs. [`Object.assign()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- MDN Web Docs. [`Symbol`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- MDN Web Docs. [`Object.prototype.toString()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
- MDN Web Docs. [`extends`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/extends) y [`super`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/super)
- MDN Web Docs. [Propiedades privadas de clase](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_properties)
- MDN Web Docs. [`JSON.stringify()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) (usado en `js/utilidades.js`)
- MDN Web Docs. [`window.open()`](https://developer.mozilla.org/es/docs/Web/API/Window/open), [`window.postMessage()`](https://developer.mozilla.org/es/docs/Web/API/Window/postMessage) y [`setTimeout()`](https://developer.mozilla.org/es/docs/Web/API/setTimeout)
