let errores = 0;
let palabraCorrecta = "WEPA";
let progreso = ["_", "_", "_", "_"];
let abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

console.log("Iniciando abecedario completo...");
 

for (let i = 0; i < abecedario.length; i++) {
    let letra = abecedario[i];
    let boton = document.createElement("button");
    boton.innerText = letra;
    boton.className = "btn-letra";
    
    boton.onclick = function() {
        console.log("Letra pulsada: " + letra);
        probar(letra, boton);
    };
    
    teclado.appendChild(boton); 
}

function probar(letra, botonPresionado) {
   
    botonPresionado.disabled = true;
    botonPresionado.style.backgroundColor = "#bbb";

    if (palabraCorrecta.includes(letra)) {
        console.log("Acierto: " + letra);
        
    
        for (let j = 0; j < palabraCorrecta.length; j++) {
            if (palabraCorrecta[j] === letra) {
                progreso[j] = letra;
            }
        }

        palabraDisplay.innerText = progreso.join(" ");
        mensaje.innerText = "¡Bien hecho!";
        mensaje.style.color = "blue";
    } 
    else {
        errores = errores + 1;
        console.log("Error. Total: " + errores);
        mensaje.innerText = "¡Esa no está!";
        mensaje.style.color = "red";

        if (errores == 1) dibujo.innerText = "  +---+\n  |   |\n  O   |\n      |";
        if (errores == 2) dibujo.innerText = "  +---+\n  |   |\n  O   |\n /|\\  |";
        if (errores >= 3) {
            dibujo.innerText = "  +---+\n  |   |\n  O   |\n /|\\  |\n / \\  |";
            mensaje.innerText = "¡PERDISTE!";
            teclado.style.display = "none"; 
        }
    }

    if (!progreso.includes("_")) {
        mensaje.innerText = "¡GANASTE!";
        mensaje.style.color = "green";
        teclado.style.display = "none";
    }
}