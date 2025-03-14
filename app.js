// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Se crea el array
const amigos = [];


// Funcion que permite agregar amigos a el array
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado a la lista.");
        return;
    }
    
    //Se inserta el nombre a la lista
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}


// Funcion que va actualizando la lista a medida que se agregan mas nombres
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Funcion para realizar el sorteo de forma random
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes ingresar al menos dos nombres para realizar el sorteo");
        return;
    }

    let amigosSorteo = [...amigos];
    let resultado = [];

    amigos.forEach(amigo => {
        let posibleAmigos = amigosSorteo.filter(a => a !== amigo);

        if (posibleAmigos.length === 0) {
            sortearAmigo();
            return;
        }

        let sorteado = posibleAmigos[Math.floor(Math.random() * posibleAmigos.length)];
        resultado.push(`${amigo} -> ${sorteado}`);
        amigosSorteo = amigosSorteo.filter(a => a !== sorteado);
    });

    mostrarResultado(resultado);
}


//Funcion para mostrar el resultado en pantalla
function mostrarResultado(resultado) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    resultado.forEach(pair => {
        const li = document.createElement("li");
        li.textContent = pair;
        resultadoLista.appendChild(li);
    });
}
