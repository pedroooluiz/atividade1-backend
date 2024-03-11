let nota1 = parseFloat(prompt("Digite a sua primeira nota de 0.1 a 10, com peso 4: "))
let nota2 = parseFloat(prompt("Digite a sua segunda nota de 0.1 a 10 com peso 6: "))

document.write("Primeira nota: ", nota1, "</br>")
document.write("Segunda nota: ", nota2, "</br>")
document.write("Média final: ", nota1 * 0.4 + nota2 * 0.6)