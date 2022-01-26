// Tratamento de dados - Curso JavaScript #06 • https://youtu.be/OJgu_KCCUSY

// Number.parseInt()
// Number.parseFloat()
// n.toString()
// `${n1} + ${n2} = ${s}`

var n1 = window.prompt("Escolha um número:")
var n2 = window.prompt("Escolha outro número:")

var N1 = Number.parseFloat(n1)
var N2 = Number.parseFloat(n2)

var total = N1 + N2

window.alert("Somados são " + total)

/* TRATAMENTO

• Agora podemos simplificar com Number();
• Para forçar o uso do número inteiro, usar Number.parseInt();
• String(n) === n.toString()

*/

window.alert('Convertido pra string: ' + String(total))

/* TEMPLATE STRING

• Para strings complexas: ${s};
• Usar aspas crases: ``

*/

window.alert(`${n1} + ${n2} = ${total}`)

/* OUTROS MÉTODOS

• s1.length (length é um atributo);
• s1.toUpperCase();
• s1.toLowerCase();
• Parênteses para métodos;
• n1.toFixed(2).replace(',', '.')

*/

var s1 = 'Aura'

s1.toUpperCase()
s1.toLowerCase()
s1.length

var n3 = 12000

n3.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})