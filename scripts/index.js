//Crear objeto para guardar datos de ingreso 
let userLogIn = {
  email: "",
  password: "",
  legalAge: "",
  acceptTerms: "",
}

//Obtener datos del check. Si lo pongo dentro del evento, solo lo reconoce si cambia despúes del submit.
let termsAndConditions = document.getElementById("tyc-input")
  termsAndConditions.addEventListener('click', event => {
    if (event.target.checked) {
      userLogIn.acceptTerms = true;
    } else {
      userLogIn.acceptTerms = false;
    }
  })

  console.log(userLogIn)

//Obtener el botón de registro
const registerBtn = document.querySelector(".register-btn");

//Evento para definir que hacer en caso de usar el botón de registro
registerBtn.addEventListener("click", function(e) {

  //Obtener datos ingresados y guardar en objeto
  userLogIn.email = document.getElementById("email-input").value;
  userLogIn.password = document.getElementById("password-input").value;

  const legalAge = document.getElementsByName("legalAge")
  let age;
  legalAge.forEach(function (element) {
    if (element.checked == true) {
      age = element.value;
    }
  })
  userLogIn.legalAge = age;

  //Arreglo para guardar errores antes de enviar
  let errors = [];

  //VALIDACIONES ANTES DE ENVIAR

  //Validar email
  if (userLogIn.email == "") {
    errors.push("Ingresa tu correo")
  }

  //Validar password
  if (userLogIn.password == "") {
    errors.push("Ingresa una contraseña")
  } else if (userLogIn.password.length < 3) {
    errors.push("La contraseña debe contener al menos 3 caracteres")
  }

  console.log(userLogIn)

  //Validar edad
  if (userLogIn.legalAge == undefined) {
    errors.push("Responde si eres mayor de edad")
  }

  //Validar términos y condiciones
  if (userLogIn.acceptTerms == false) {
    errors.push("No aceptaste los términos y condiciones")
  }

  //Prevenir el envío si hay errores
  if (errors.length > 0) {
    e.preventDefault();
    //Imprimir errores en el HTML
    let formContainer = document.getElementById("registerForm")
    let errorList = document.createElement("ul")
    formContainer.appendChild(errorList)
    errors.forEach(element => {
      let li = document.createElement("li");
      let liText = document.createTextNode(element);
      li.appendChild(liText);
      errorList.appendChild(li);
    })
    formContainer.appendChild(errorList)
    console.log(userLogIn)
  }

  
})


  // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
  // 1. Obtenemos el valor ingresado en el input de email
  // 2. Obtenemos los datos ingresados en el input de password
  // 3. Obtenemos el valor del input radio
  // 4. Obtenemos el valor del input checkbox
  // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
  // 6 Vaidamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
  // 7 Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.