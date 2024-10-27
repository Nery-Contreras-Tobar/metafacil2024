let respuestas = [];
let operacionActual = {};
let pecesAtrapados = 0;
let erroresCometidos = 0;

function generarOperacion() {
    let num1, num2;
    do {
        num1 = Math.floor(Math.random() * 90) + 10;
        num2 = Math.floor(Math.random() * 9) + 1;
    } while (num1 % num2 !== 0);
    const resultado = Math.floor(num1 / num2);
    operacionActual = { num1, num2, resultado };
    document.getElementById('operacion').textContent = `${num1} ÷ ${num2}`;
    return resultado;
}

function inicializarJuego() {
    // Solo al iniciar el juego, los contadores se restablecen
    respuestas = [];
    pecesAtrapados = 0;
    erroresCometidos = 0;
    document.getElementById('mensaje').textContent = "";
    document.getElementById('pez-counter').textContent = `Peces atrapados: ${pecesAtrapados}`;
    document.getElementById('errores-counter').textContent = `Errores cometidos: ${erroresCometidos}`;

    generarPeces();
}

function generarPeces() {
    const resultadoCorrecto = generarOperacion();

    const cuadros = [
        document.getElementById('cuadro-1'),
        document.getElementById('cuadro-2'),
        document.getElementById('cuadro-3'),
        document.getElementById('cuadro-4')
    ];

    const posicionCorrecta = Math.floor(Math.random() * 4);

    cuadros.forEach((cuadro, index) => {
        let respuesta;
        if (index === posicionCorrecta) {
            respuesta = resultadoCorrecto;
        } else {
            do {
                respuesta = Math.floor(Math.random() * 100) + 1;
            } while (respuesta === resultadoCorrecto);
        }
        cuadro.textContent = respuesta;
        cuadro.onclick = () => verificarRespuesta(respuesta);
    });
}

function verificarRespuesta(respuesta) {
    if (respuesta === operacionActual.resultado) {
        pecesAtrapados++;
        document.getElementById('pez-counter').textContent = `Peces atrapados: ${pecesAtrapados}`;

        // Genera una nueva operación sin reiniciar el juego
        generarPeces();
    } else {
        erroresCometidos++;
        document.getElementById('errores-counter').textContent = `Errores cometidos: ${erroresCometidos}`;
        if (erroresCometidos >= 5) {
            document.getElementById('mensaje').textContent = "¡Perdiste! Demasiados errores.";
            desactivarCuadros();
        }
    }
}

function desactivarCuadros() {
    const cuadros = document.querySelectorAll('.cuadro');
    cuadros.forEach(cuadro => {
        cuadro.onclick = null;
    });
}

function reiniciarJuego() {
    inicializarJuego();
}

inicializarJuego();
