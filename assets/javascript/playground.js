// Variáveis e Tipos Primitivos - Curso JavaScript #05 • https://youtu.be/Vbabsye7mWo

// window.alert("Hey!");
// window.confirm("Do you love me?");
// window.prompt("What is your name?");

var yourName = window.prompt("What is your name?");

var newTitle = document.querySelector("#yourName");

function naming() {
    if (yourName !== null) {
        newTitle.innerHTML = yourName;
    }
}

naming();