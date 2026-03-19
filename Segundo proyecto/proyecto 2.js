const palabraoculta ="ZODIACO";
let Intentos = 3;
let letrascorrectas = []

function nombredeJugador(nombre){
    console.log("Hola"+nombre+"estas en el Ahorcado,donde tienes que adivinar o mueres,tendras"+Intentos+"intentos para completarlo.Tu Pista sera:Signos.!Buen Juego¡")
}
nombredeJugador("Anthony");

function  tenerespacios(palabra){

  return palabra.split('').map (letra => acertadas.includes(letra) ? letra : "_").join('');
}


let findeljuego = tenerespacios ("ZODIACO");
console.log(findeljuego);

while (Intentos > 0){
  let progreso =tenerespacios(palabraoculta);
  console.log("Palabra"+progreso);
  console.log("Intentos restantes:"+Intentos);
  
  if (!progreso.includes("_")){
    let puntajeFinal = calcularPuntaje(Intentos);
    break;
  }
  
  let letra = prompt("Coloca una palabra:").toUpperCase();

  if (palabraoculta.includes(letra) && !acertaste.includes(letra)){
    alert("!Corecto¡");
    acertaste.push(intento);


  }
 
  else if (acertaste.includes(letra)){
    alert("Ya la tienes Intenta otra");
  }

  else {
   intento--;
   alert("Incorrecto,te quedan"+Intentos+"intentos.");

  if (intentos === 1){
    console.log("Espera,te queda un solo intento.");
   } 
 }
}

  if (intentos === 0){
    alert("PERDISTE,la palabra correcto es:"+palabraoculta);
  }

 return rl.close();