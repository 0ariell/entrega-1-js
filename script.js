let numerosPosibles = [];
for (let i = 1; i <= 1000; i++ ) {
    numerosPosibles.push(i)
}
let numeroOculto = numerosPosibles[Math.floor(Math.random() * numerosPosibles.length)];

function jugar() {
    let intentos = 0;
    let numeroJugador;

    do {
        numeroJugador = parseInt(prompt("Ingrese un número e intente adivinar: "));
        intentos++;

        if (numeroJugador === numeroOculto) {
            alert("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
            
            let jugarDeNuevo = confirm("Quieres jugar nuevamente?");
        
        if(jugarDeNuevo) {
            intentos = 0;
        } else {
            alert("Gracias por jugar!");
            break;
        }

        } else {

            if (numeroJugador > numeroOculto) {
                alert("El número oculto es más bajo, prueba otro.");
            } else if (numeroJugador < numeroOculto) {
                alert("El número oculto es más alto, prueba otro.");
            }
    }
        
    } while (numeroJugador !== numeroOculto);  
}


jugar();