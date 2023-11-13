# Modulo_DOM
   El **Modelo de Objetos del Documento (DOM)** es capaz de conectar páginas web a scripts o lenguajes de programación al representar la estructura de un documento, como el HTML que constituye una página web, en la memoria. En palabras más prácticas, El DOM es como el plano de una casa para los navegadores web. Imaginemos que una página web es como una casa con muchas habitaciones (elementos HTML). El DOM organiza y estructura esas habitaciones para que la computadora pueda entender y manipular cada parte de la página. Cada habitación (elemento) tiene sus propias características y puede cambiar de forma independiente. Así, el DOM permite a los programadores interactuar con la página web, cambiando su contenido, estilo o estructura. 

### Diferencia entre el DOM y el HTML:
   - **HTML** como se explicó en el módulo de lógica de programación, se utiliza para estructurar y presentar el contenido de una página web. Define el **esqueleto** y la **organización** de los elementos en la página.
   - El **DOM**, por otro lado, es una **representación programática** de la estructura del documento HTML. Mientras que el HTML es estático y solo describe la página, el DOM es **dinámico** y permite interactuar con los elementos de la página mediante código.

### Importancia del DOM en el desarrollo web Frontend:
   - **Manipulación de contenido**: El DOM te permite **agregar**, **eliminar** o **modificar** elementos en una página web. Por ejemplo, puedes crear un botón que, al hacer clic, agregue un nuevo elemento al DOM.
   - **Interactividad**: El DOM permite **responder a eventos** como clicks de botón, movimientos del mouse o pulsaciones de teclas. PDT: Es para mi una de mis favoritas jaja.
   - **Actualización en tiempo real**: Al manipular el DOM, se puede **actualizar la interfaz de usuario** sin recargar toda la página. Esto mejora la **experiencia del usuario** y la **eficiencia**.

### **Eventos del DOM y su Importancia en el Desarrollo Web**

**¿Qué son los eventos del DOM?**
   Los **eventos del DOM** son las acciones o sucesos que ocurren en una página web como dijimos anterirmente. Estos eventos permiten **interactuar dinámicamente** con los elementos de la página mediante **JavaScript**. Cada evento tiene un **controlador** que ejecuta una función específica cuando se activa, aquí un ejemplo práctico:

   - **Clic (onclick)**: Se dispara cuando se hace clic en un elemento. Ejemplo:
     ```html
     <button onclick="miFuncion()">Haz clic</button>
     ```
   - **Envío de formulario (submit)**: Se activa al enviar un formulario. Ejemplo:
     ```html
     <form onsubmit="validarFormulario()">
       <!-- Campos del formulario -->
       <button type="submit">Enviar</button>
     </form>
     ```
   - **Carga de página (load o DOMContentLoaded)**: Se ejecuta cuando la página se carga completamente. Ejemplo:
     ```javascript
     document.addEventListener('DOMContentLoaded', function() {
       // Lógica después de cargar la página
     });
     ```
### Importancia de manejar eventos:
Estas importancias son muy parecidas al porque usar el DOM en general, ya que:

   - **Actualización en tiempo real**: Manipular eventos permite **actualizar la interfaz** sin recargar la página.
   - **Controladores de eventos**: Se añaden a elementos del DOM para responder a acciones específicas, algo que con HTML solo es dificil de lograr.

**Métodos para seleccionar elementos del DOM en JavaScript:**
1. **getElementById():**
   - Método que selecciona un elemento por su identificador único (ID).
   ```javascript
   const miElemento = document.getElementById('miId');
   ```

2. **getElementsByClassName():**
   - Selecciona elementos por su clase y devuelve una colección de nodos.
   ```javascript
   const elementosClase = document.getElementsByClassName('miClase');
   ```

3. **getElementsByTagName():**
   - Selecciona elementos por su nombre de etiqueta y devuelve una colección de nodos.
   ```javascript
   const elementosEtiqueta = document.getElementsByTagName('p');
   ```

4. **querySelector():**
   - Permite seleccionar el primer elemento que coincida con un selector CSS.
   ```javascript
   const primerElemento = document.querySelector('#miId .miClase');
   ```

5. **querySelectorAll():**
   - Similar a `querySelector()`, pero devuelve todos los elementos que coinciden con el selector CSS en una NodeList.
   ```javascript
   const todosLosElementos = document.querySelectorAll('.miClase');
   ```

 ## Creación de Elementos y Manipulación del DOM
 
 ### Creación de un nuevo elemento HTML y su adición al DOM:
   Para crear un nuevo elemento HTML y agregarlo al DOM utilizando JavaScript, sigue estos pasos:
   ```javascript
   // 1. Crea el elemento (por ejemplo, un párrafo)
   const nuevoParrafo = document.createElement('p');
   
   // 2. Agrega contenido al elemento
   nuevoParrafo.textContent = '¡Hola, mundo!';
   
   // 3. Encuentra un elemento existente en el DOM donde deseas agregar el nuevo elemento
   const contenedor = document.getElementById('miContenedor');
   
   // 4. Agrega el nuevo elemento al contenedor
   contenedor.appendChild(nuevoParrafo);
   ```
   En este ejemplo, se crea un párrafo con el texto "¡Hola, mundo!" y se agrega al elemento con el ID "miContenedor".

### Importancia de la manipulación del DOM en aplicaciones web dinámicas e interactivas:
Además de las anteriormente dichas que son la interactividad y la actualización en tiempo real, aquí otras razones por la cual es super importante:

- **Actualización de Contenido**: Los desarrolladores pueden cambiar y actualizar el contenido de la página según la interacción del usuario, como mostrar nuevos datos, mensajes de error o actualizar puntuaciones en juegos en línea.
- **Respuestas a Eventos del Usuario**: La manipulación del DOM facilita la gestión de eventos, como clics de botones o envíos de formularios, permitiendo respuestas específicas y personalizadas.
- **Mejora de Experiencia de Usuario**: La capacidad de modificar dinámicamente el DOM contribuye a la creación de interfaces de usuario más atractivas y amigables, mejorando la experiencia general del usuario en la aplicación web.

## Event Bubbling y Event Delegation:
El Event Bubbling y Event Delegation, son estrategias poderosas en JavaScript para manejar eventos de manera eficiente y estructurada, aquí la explicación de cada una:

- **Event Bubbling**: Cuando ocurre un evento en un elemento, se propaga hacia arriba en la jerarquía del DOM. Por ejemplo, si haces clic en un botón dentro de un div, el evento también afectará al div y a cualquier otro elemento superior en la cadena. Esto se llama "bubbling" (burbujeo).
- **Event Delegation**: En lugar de asignar un controlador de eventos a cada elemento individual, puedes asignarlo a un elemento superior (como el contenedor principal). Luego, cuando ocurre un evento, se verifica si el objetivo del evento coincide con un selector específico (por ejemplo, un botón dentro del contenedor). Esto es más eficiente y útil para elementos creados dinámicamente.

Ambos conceptos son relevantes para gestionar eventos en páginas web con múltiples elementos interactivos, ya que optimizan el rendimiento y simplifican el código.

