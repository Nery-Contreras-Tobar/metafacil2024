function mostrarFraseMotivacional() {
    const frases = [
        "¡Cada paso te acerca a ser más genial!",
        "¡Sigue adelante, estás haciendo un gran trabajo!",
        "¡No te rindas, lo estás logrando!",
        "¡Tu esfuerzo te llevará lejos!",
        "¡Eres una estrella en crecimiento!"
    ];

    const indice = Math.floor(Math.random() * frases.length);
    document.getElementById("fraseMotivacional").textContent = frases[indice];
}

function mostrarHistorias() {
    const historias = [
        "Historia 1: Érase una vez un número llamado 5, que siempre soñaba con ser el más grande de todos...",
        "Historia 2: El número 8 siempre estaba ocupado haciendo vueltas infinitas, hasta que conoció al 0...",
        "Historia 3: El número 9 quería ser perfecto como el 10, hasta que descubrió que ser él mismo era lo mejor."
    ];

    mostrarContenidoExtra(historias, '📖 Historias de Números');
}

function mostrarChistes() {
    const chistes = [
        "Chiste 1: ¿que le dijo el 3 al 30? ¡para ser como yo tienes que ser sin 0! 😂",
        "Chiste 2: ¿Qué le dijo el 0 al 8? ¡Bonito cinturón! 😆",
        "Chiste 3: ¿Qué hace una calculadora en la fiesta? ¡Sumando diversión! 🎉"
    ];

    mostrarContenidoExtra(chistes, '😂 Chistes de Números');
}

function mostrarCantos() {
    const cantos = [
        "Canto 1: Un elefante se balanceaba sobre la tela de una araña... 🎶",
        "Canto 2: Dos y dos son 4, 4 y 2 son 6, 6 y 6 son 12 y 8 16! 🎵",
        "Canto 3: Siete, ocho, nueve, diez, ¡todos vamos a aprender! 🎼"
    ];

    mostrarContenidoExtra(cantos, '🎶 Cantos con Números');
}

function mostrarContenidoExtra(arrayContenido, titulo) {
    const contenidoDiv = document.getElementById("contenidoExtra");
    contenidoDiv.style.display = "block";
    contenidoDiv.innerHTML = `<h2>${titulo}</h2>`;
    arrayContenido.forEach((item) => {
        contenidoDiv.innerHTML += `<p>${item}</p>`;
    });
}

function volverInicio() {
    window.location.href = 'index.html'; // Cambia esto según tu estructura de proyecto
}

window.onload = mostrarFraseMotivacional;
