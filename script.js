// 1. Cambiar el color de tema de la pagina al hacer click en un botón

// Crear una función para generar un número aleatorio entre 0 y 255
function numeroAleatorio() {
    return Math.floor(Math.random() * 256);
}

// Crear un botón y agregarlo al DOM
let boton = document.createElement('button');
boton.innerText = 'Cambiar color de tema';
boton.classList.add('btn');
document.body.appendChild(boton);

let botonSubmit = document.querySelector('.style-submit-btn');

// Asociar la función al evento "click" del botón
boton.addEventListener('click', () => {
    let colorAleatorio = `rgb(${numeroAleatorio()}, ${numeroAleatorio()}, ${numeroAleatorio()})`;
    document.body.style.backgroundColor = colorAleatorio;
    botonSubmit.style.backgroundColor = colorAleatorio;
    boton.style.color = colorAleatorio;
  });



// 2. Delegación de eventos en una lista no ordenada

// Crear una lista no ordenada y agregarla al DOM
let lista = document.createElement('ul');
for (let i = 0; i < 5; i++) {
  let elementoLista = document.createElement('li');
  elementoLista.innerText = `Elemento ${i + 1}`;
  lista.appendChild(elementoLista);
}
document.body.appendChild(lista);

// Implementar el evento del click
lista.addEventListener('click', (evento) => {
  if (evento.target.tagName === 'LI') {
    console.log(`Has hecho clicK en ${evento.target.innerText}`);
  }
});


//3. Validación de formulario

// Creación del formulario
const form = document.querySelector("form");


// Funcion que le da estilo a los errores 
const mostrarError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

const handleFormData = (e) => {
    e.preventDefault();

    // Recibir elementos del HTML
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const dateInput = document.getElementById("date");
    const genderInput = document.getElementById("gender");

    // quitar cualquier espacio en blanco
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const date = dateInput.value;
    const gender = genderInput.value;

    // Expresion regular para validar el correo
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Cada que se le da submit, se elimina el mensaje de error
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    // Las valida
    if (fullname === "") {
        mostrarError(fullnameInput, "Escribe el nombre completo ");
    }
    if (!emailPattern.test(email)) {
        mostrarError(emailInput, "Escribe un correo valido");
    }
    if (password === "") {
        mostrarError(passwordInput, "Escribe la contraseña");
    }
    if (date === "") {
        mostrarError(dateInput, "Selecciona una fecha de nacimiento");
    }
    if (gender === "") {
        mostrarError(genderInput, "Selecciona un genero");
    }

    // mirar que no haya ningun mensaje de error para mostrar valores en pantalla
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length === 0) {
        console.log({ valor: fullname });
        console.log({ valor: email });
        console.log({ valor: password });
        console.log({ valor: date });
        console.log({ valor: gender });

        fullnameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        dateInput.value = '';
        genderInput.value = '';
        return
    };
}


form.addEventListener("submit", handleFormData);