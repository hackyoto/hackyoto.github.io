// Variáveis e Tipos Primitivos - Curso JavaScript #05 • https://youtu.be/Vbabsye7mWo

// window.alert("Hey!");
// window.confirm("Do you love me?");
// window.prompt("What is your name?");

var yourName = window.prompt("What is your name?");

var newTitle = document.querySelector("#yourName");

function naming() {
    if (yourName !== null || undefined) {
        newTitle.innerHTML = yourName[0].toUpperCase() + yourName.slice(1).toLowerCase();
    }
}

naming();

/* VARIÁVEIS

• Igual (=) deve ser lido como 'recebe';
• Para descobrir o tipo de dado podemos usar o comando 'typeof';
• Function também é um tipo;
• Mais tipos não listados abaixo: null, undefined.

*/

// number
var n1 = 10
var n2 = 0.5
var n3 = -20
var n4 = NaN
var n4 = Infinity

// string
var s1 = "Paulo"
var s2 = 'Kyo'
var s3 = `Aura`

// boolean
var b1 = true
var b2 = false

// object
var o1 = [1, 2, 3] // Isso é um array

// function
var f1 = function name(params) {
    
}