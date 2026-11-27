# Actividades con objetos — Entorno Cliente

Desarrollo Web en Entorno Cliente · 2.º DAW · Jose Ramón Neira Vega

**Probar online:** [https://jramonnv0786-prog.github.io/Actividades-Objetos/](https://jramonnv0786-prog.github.io/Actividades-Objetos/)

## Cómo probarlo

- **Online:** abre el enlace de arriba y entra en cada ejercicio desde el índice.
- **En local:** abre la carpeta con Visual Studio Code y lanza `index.html` con la extensión Live Server.
- Cada ejercicio muestra su resultado en la **consola** del navegador (F12 → Consola).

| Ej. | Tema | Qué hacer | Resultado esperado |
|---|---|---|---|
| 1 y 2 | Creación, acceso y forEach | Abrir la página y la consola | Nombre y edad (punto), objeto con `pais` y sin `trabajo`, edad (corchetes); existe `nombre`, no existe `apellido`; listado de claves y valores |
| 3 | Referencias y clonación | Abrir la página y la consola | El cambio en `usuario2` afecta a `usuario1`; el cambio en el clon no afecta al original |
| 4 | Constructor y `this` | Abrir la página y la consola | Objetos `Car` creados con `new` y sus propiedades |
| 5 | Symbol y claves ocultas | Abrir la página y la consola | `for...in` no muestra la clave `id`; sí se accede con `empleado[id]` |
| 6 | Conversión a primitivo | Abrir la página y la consola | `Saldo: 1000 EUR` |
| 7 | Herencia de clases | Abrir la página y la consola | `Toyota is Rolling out!` e información de nombre y modelo |
| 8 | Propiedades privadas | Abrir la página y la consola | Código 1234 → 5678; el acceso directo a `#codigo` no es posible |

## Estructura

```
├── index.html          → índice de ejercicios
├── css/styles.css      → estilos comunes
├── ejercicio-01/       → ejercicios 1 y 2 (comparten el objeto persona)
└── ejercicio-03/ … ejercicio-08/
    ├── index.html
    └── script.js
```

## Bibliografía

- ILERNA. *4.1. JS: Colecciones, funciones y objetos (parte I)* (S. Montes Repiso).
- ILERNA. *4.4. JS: Objetos definidos por el usuario* (S. Montes Repiso).
- ILERNA. *3.5. Patrones de diseño en JS* (S. Montes Repiso).
- MDN Web Docs. [Trabajando con objetos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects)
- MDN Web Docs. [`Object.assign()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- MDN Web Docs. [`Symbol`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- MDN Web Docs. [`Object.prototype.toString()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
- MDN Web Docs. [`extends`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/extends) y [`super`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/super)
- MDN Web Docs. [Propiedades privadas de clase](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_properties)
