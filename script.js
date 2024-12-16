// funcion para generar numero oculto 
function generarNumeroOculto(rango) {
    return Math.floor(Math.random() * rango) + 1; 
}

function nivelesDeDificultad() {
    let dificultad = prompt("Antes de comenzar, elige el nivel de dificultad! (facil 1-100 15 intentos, medio 1-500 10 intentos, dificil 1-1000 7 intentos.)");
    dificultad = dificultad.toLowerCase();  // Convertimos a minúsculas para no diferenciar entre mayúsculas y minúsculas
    switch(dificultad) {
        case "facil":
            return {rango: 100, intentos: 15};
        case "medio":
            return {rango: 500, intentos: 10};
        case "dificil":
            return {rango: 1000, intentos: 7};
        default:
            alert("Opción no válida, se seleccionará la dificultad 'fácil'.");
            return {rango: 100, intentos: 15};            
    }
}

// funcion para preguntar si quiere comenzar
function preguntarInicio() {
    let quieresJugar = confirm("¡Hola! ¿Quieres comenzar a jugar?");
    if (quieresJugar) {
        return true;
    } else {
        alert("Ok, ¡no te preocupes!");
        return false;
    }
}

// funcion para solicitar el numero 
function pedirNumero() {
    let entrada = prompt("Ingrese un numero e intente adivinar!: ");
    if (entrada === null) {
        return null;
    }

    if (isNaN(entrada) || entrada === "") {
        alert("Eso no es un número válido. Inténtalo nuevamente.");
        return pedirNumero();
    }
    return parseInt(entrada);
}

// funcion para dar la pista si mas bajo o mas alto 
function darPista(numeroJugador, numeroOculto) {
    if (numeroJugador < numeroOculto) {
        alert("El numero oculto es mas grande, intentalo nuevamente!");
    } else if (numeroJugador > numeroOculto) {
        alert("El numero oculto es mas chico, intentalo nuevamente!");
    }
}

// funcion para jugar de nuevo 
function jugarDeNuevo() {
    let jugar = confirm("¿Quieres jugar nuevamente?");
    if(jugar) {
        return true;
    } else {
        alert("Gracias por jugar!");
        return false
    }
}

// funcion para que empiece el juego 
function iniciarJuego() {
    // Obtener la dificultad seleccionada
    const dificultad = nivelesDeDificultad();
    let numeroOculto = generarNumeroOculto(dificultad.rango); // Usamos el rango según la dificultad seleccionada
    let intentos = 0;
    let numeroJugador;
    let seguirJugando = true;

    while (seguirJugando) {
        numeroJugador = pedirNumero();
        intentos++;

        if (numeroJugador === null) {
            break; // Si el jugador cancela, salimos del ciclo
        }

        if (numeroJugador === numeroOculto) {
            alert("Felicitaciones lo adivinaste! en " + intentos + " intentos!");
            seguirJugando = jugarDeNuevo();
            if (seguirJugando) {
                intentos = 0;
                numeroOculto = generarNumeroOculto(dificultad.rango); // Generamos un nuevo número oculto
            }
        } else {
            darPista(numeroJugador, numeroOculto);
        }

        // Si se superan los intentos, se termina el juego
        if (intentos >= dificultad.intentos) {
            alert("Te quedaste sin intentos, El número oculto era " + numeroOculto);
            seguirJugando = jugarDeNuevo();
            if (seguirJugando) {
                intentos = 0;
                numeroOculto = generarNumeroOculto(dificultad.rango); // Generamos un nuevo número oculto
            }
        }
    }
}

// Verificar si el jugador quiere comenzar y ejecutar el juego
if (preguntarInicio()) {
    iniciarJuego();
}