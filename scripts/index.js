let userLogIn = {
  email: "",
  password: "",
  legalAge: "",
  acceptTerms: "",
}

const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", (e) => {
  
  //Mostrar errores antes de enviar
  let errors = [];

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

  let termsAndConditions = document.getElementById("tyc-input")
  let termsAccepted = false
  termsAndConditions.addEventListener('click', function(e){
    termsAccepted = true;
  })
  userLogIn.acceptTerms = termsAccepted;

  //Validar email
  if(userLogIn.email==""){
    errors.push("Ingresa tu correo")
  }
  
  //Validar password
  if(userLogIn.password==""){
    errors.push("Ingresa una contraseña")
  }else if(userLogIn.password.length<3){
    errors.push("La contraseña debe contener al menos 3 caracteres")
  }

  //Validar edad
  if(userLogIn.legalAge==""){
    errors.push("Responde si eres mayor de edad")
  }

  //Validar términos y condiciones
  if(userLogIn.acceptTerms==false){
    errors.push("No aceptaste los términos y condiciones")
  }

  //Prevenir el envío si hay errores
  if(errors.length>0){
    e.preventDefault();
  }

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