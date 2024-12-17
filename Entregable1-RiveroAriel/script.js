// función para generar número oculto 
function generarNumeroOculto(rango) {
    return Math.floor(Math.random() * rango) + 1; 
}

function nivelesDeDificultad() {
    let dificultad = prompt(
        "Antes de comenzar, elige el nivel de dificultad:\n" + "Facil: de 1-100 (15 intentos)\n" + "Medio: de 1-500 (10 intentos)\n" + "Dificil: de 1-1000 (7 intentos)"
    );
    dificultad = dificultad.toLowerCase();
    switch(dificultad) {
        case "facil":
            return {nombre: "Facil", rango: 100, intentos: 15};
        case "medio":
            return {nombre: "Medio", rango: 500, intentos: 10};
        case "dificil":
            return {nombre: "Dificil", rango: 1000, intentos: 7};
        default:
            alert("Opción no válida, se seleccionará la dificultad 'fácil'.");
            return {nombre: "Facil", rango: 100, intentos: 15};            
    }
}

// función para preguntar si quiere comenzar
function preguntarInicio() {
    let quieresJugar = confirm("¡Hola! ¿Quieres comenzar a jugar?");
    if (quieresJugar) {
        return true;
    } else {
        alert("Ok, ¡no te preocupes!");
        return false;
    }
}

// función para solicitar el número 
function pedirNumero(dificultad, intentos) {
    let entrada = prompt("Elegiste la dificultad " + dificultad + ". Tienes: " + intentos + " intentos. Ingrese un número e intente adivinar!: ");
    
    if (entrada === null) {
        return null; 
    }

    if (isNaN(entrada) || entrada === "") {
        alert("Eso no es un número válido. Inténtalo nuevamente.");
        return pedirNumero(dificultad, intentos);
    }
    return parseInt(entrada); 
}

// función para dar la pista si más bajo o más alto 
function darPista(numeroJugador, numeroOculto) {
    if (numeroJugador < numeroOculto) {
        alert("El número oculto es más grande, ¡inténtalo nuevamente!");
    } else if (numeroJugador > numeroOculto) {
        alert("El número oculto es más chico, ¡inténtalo nuevamente!");
    }
}

// función para jugar de nuevo 
function jugarDeNuevo() {
    let jugar = confirm("¿Quieres jugar nuevamente?");
    if(jugar) {
        return true;
    } else {
        alert("Gracias por jugar!");
        return false;
    }
}

// función para que empiece el juego 
function iniciarJuego() {
    const dificultad = nivelesDeDificultad();
    let numeroOculto = generarNumeroOculto(dificultad.rango);  
    let intentos = 0;
    let numeroJugador;
    let seguirJugando = true;

    while (seguirJugando) {
        numeroJugador = pedirNumero(dificultad.nombre, dificultad.intentos); 
        if (numeroJugador === null) {
            break;
        }

        intentos++;

        if (numeroJugador === numeroOculto && intentos === 1) {
            alert("¡Felicitaciones, sos un enfermo, adivinaste en 1 intento. Rompiste el juego no podes usarlo más");
            break;
        }

        if (numeroJugador === numeroOculto && intentos === 2) {
                alert("¡Felicitaciones, sos un enfermo, adivinaste en 2 intentos.");
                return iniciarJuego();
        }
        // Verifica si el jugador adivinó el número
        if (numeroJugador === numeroOculto) {
            alert("¡Felicitaciones, lo adivinaste! en " + intentos + " intentos.");
            seguirJugando = jugarDeNuevo();  // Pregunta si el jugador quiere jugar de nuevo
            if (seguirJugando) {
                return iniciarJuego()
            }
        } else {
            darPista(numeroJugador, numeroOculto);  // Da la pista si el número es más grande o más pequeño
        }

        // Si se superan los intentos, termina el juego
        if (intentos >= dificultad.intentos) {
            alert("Te quedaste sin intentos. El número oculto era " + numeroOculto);
            seguirJugando = jugarDeNuevo();  // Pregunta si el jugador quiere jugar de nuevo
            if (seguirJugando) {
                return iniciarJuego();
            }
        }
    }
}


window.addEventListener('load', function() {
    // Ahora el código JS se ejecuta después de que toda la página está completamente cargada

    if (preguntarInicio()) {
        iniciarJuego();
    }
});