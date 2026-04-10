// No borrar ni modificar las constantes y variables que ya están declaradas, ya que son necesarias para el funcionamiento del juego.
// Simplemente comenta las líneas indicadas más abajo una vez hagas las pruebas del funcionamiento del código inicial.

let username = "";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ------------------- Ejemplo para pedir datos al usuario ----------------------

// username = await getUserInput("What is your name?"); // COMENTA esta linea cuando empieces a programar.


// ------------------- Función para pedir datos al usuario ----------------------
function getUserInput(question) {
    return new Promise((resolve) => {
        rl.question(question + " ", (answer) => {
            resolve(answer);
        });
    });
}

//-------------------- Fin del código Espacio Educa ----------------------

const palabras = [
    { palabra: "AMARILLO", pista: "Color del sol" },
    { palabra: "PSIQUIATRA", pista: "Especialista en salud mental" },
    { palabra: "KETCHUP", pista: "Condimento rojo para papas fritas" },
    { palabra: "XILOFONO", pista: "Instrumento musical de laminas" },
    { palabra: "PIZZAZZ", pista: "Estilo, energia o vitalidad" },
    { palabra: "PAPEL", pista: "Material para escribir" },
    { palabra: "ZODIACO", pista: "Signos astronomicos" }
];

function limpiarPantalla() {
    process.stdout.write('\x1Bc');
}

async function startGame() {
    const elegido = palabras[Math.floor(Math.random() * palabras.length)];
    let intentos = 5;
    let acertadas = [];
    let letrasUsadas = [];

    while (intentos > 0) {
        limpiarPantalla();
        console.log("------------------------------------");
        console.log("      BIENVENIDO AL AHORCADO");
        console.log("------------------------------------");
        console.log("\nPISTA: " + elegido.pista);
        console.log("INTENTOS: " + intentos);
        
        let progreso = elegido.palabra.split('').map(l => acertadas.includes(l) ? l : "_").join(' ');
        console.log("\nPALABRA: " + progreso);
        console.log("USADAS: " + letrasUsadas.join(", "));

        if (!progreso.includes("_")) {
            console.log("\nGANASTE");
            break;
        }

        let entrada = (await getUserInput("\nLetra:")).toUpperCase();
        let letra = entrada[0];

        if (!letra || !/[A-Z]/.test(letra)) continue;
        if (letrasUsadas.includes(letra)) continue;

        letrasUsadas.push(letra);

        if (elegido.palabra.includes(letra)) {
            acertadas.push(letra);
        } else {
            intentos--;
        }
    }

    if (intentos === 0) {
        limpiarPantalla();
        console.log("PERDISTE. La palabra era: " + elegido.palabra);
    }

    let otra = await getUserInput("\n¿Otra vez? (s/n):");
    if (otra.toLowerCase() === 's') {
        await startGame(); 
    } else {
        console.log("Adios.");
        return rl.close(); 
    }
}

startGame();