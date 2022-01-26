var yourName = window.prompt("What is your name?");

var newTitle = document.querySelector("#yourName");

function naming() {
    if (yourName !== null || undefined) {
        newTitle.innerHTML = yourName[0].toUpperCase() + yourName.slice(1).toLowerCase();
    }
}

naming();