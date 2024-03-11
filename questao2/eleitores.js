let totalEleitores = parseFloat(prompt("Digite o número total de eleitores de um município: "))
let votoBranco = parseFloat(prompt("Digite os votos em branco: "))
let votoNulo = parseFloat(prompt("Digite os votos nulos: "))
let votoValido = parseFloat(prompt("Digite os votos válidos :"))

let validacao = votoBranco + votoNulo + votoValido

// Verifica se o número inserido é válido
if (validacao <= totalEleitores) {

    document.write("Total de eleitores: " + totalEleitores + "</br>")
    document.write("Eleitores que votaram em branco: " + votoBranco + ". Percentual sobre o total: " + votoBranco / totalEleitores * 100 + "% </br>")
    document.write("Eleitores que votaram nulo: " + votoNulo + ". Percentual sobre o total: " + votoNulo / totalEleitores * 100 + "% </br>")
    document.write("Eleitores que votaram: " + votoValido + ". Percentual sobre o total: " + votoValido / totalEleitores * 100 + "% </br>")


} else {
    // Exibe uma mensagem de erro na tela
    document.write("A quantidade de votos é maior do que o número de eleitores. Por favor, insira os dados novamente.")
}