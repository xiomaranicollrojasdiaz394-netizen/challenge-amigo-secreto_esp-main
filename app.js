// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    
    if (nombre === '') {
        alert('Por favor, escribe un nombre');
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista');
        return;
    }
    
    // Añadir el nombre al array y limpiar el input
    amigos.push(nombre);
    input.value = '';
    
    // Actualizar la lista visual
    actualizarListaAmigos();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Necesitas al menos 2 amigos para realizar el sorteo');
        return;
    }
    
    let amigosParaSortear = [...amigos];
    let resultados = [];
    
    for (let i = 0; i < amigos.length; i++) {
        let opciones = amigosParaSortear.filter(amigo => amigo !== amigos[i]);
        if (opciones.length === 0) {
            return sortearAmigo();
        }
        
        const indiceAleatorio = Math.floor(Math.random() * opciones.length);
        const amigoSeleccionado = opciones[indiceAleatorio];
        
        resultados.push({
            persona: amigos[i],
            amigoSecreto: amigoSeleccionado
        });
        
        amigosParaSortear = amigosParaSortear.filter(amigo => amigo !== amigoSeleccionado);
    }
    
    mostrarResultados(resultados);
}

function mostrarResultados(resultados) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';
    
    resultados.forEach(par => {
        const li = document.createElement('li');
        li.textContent = `${par.persona} le regala a ${par.amigoSecreto}`;
        resultadoElement.appendChild(li);
    });
}