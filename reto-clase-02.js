let EDAD = prompt("Ingresa tu edad, tienes que ser mayor de edad para accesar al sitio");

 if (EDAD <= 18) {
    console.log("Eres menor de edad, no puedes accesar a este sitio.");
  }
  else if (EDAD < 50) {
    console.log("Bienvenido al sitio ☺");
  }
  else {
    console.log("Eres un poco mayor , pero bienvenido tambien ☺");
  }
