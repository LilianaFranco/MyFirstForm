const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", (e) => {
  
  //Mostrar errores antes de enviar
  let errors = [];

  //Obtener datos ingresados
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;
  
  const legalAge = document.getElementsByName("legalAge")
  let age;
  legalAge.forEach(function (element) {
    if (element.checked == true) {
      age = element.value;
    }
  })

  let termsAndConditions = document.getElementById("tyc-input")
  let termsAccepted = false
  termsAndConditions.addEventListener('click', function(e){
    termsAccepted = true;
  })

  //Validar email
  if(email==""){
    errors.push("Ingresa tu correo")
  }
  
  //Validar password
  if(password==""){
    errors.push("Ingresa una contraseña")
  }else if(password.length<3){
    errors.push("La contraseña debe contener al menos 3 caracteres")
  }

  //Validar edad
  if(age==""){
    errors.push("Responde si eres mayor de edad")
  }

  //Validar edad
  if(age==null){
    errors.push("Responde si eres mayor de edad")
  }

  //Validar términos y condiciones
  if(termsAccepted==false){
    errors.push("No aceptaste los términos y condiciones")
  }

  //Prevenir el envío si hay errores
  if(errors.length>0){
    e.preventDefault();
    let formContainer = document.getElementById("registerForm")
    let errorBox = document.createElement("div")
    let errorContent = document.createTextNode(`${errors}`)
    errorBox.appendChild(errorContent)
    formContainer.appendChild(errorBox)
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