let custoFab = parseFloat(prompt("Qual é o valor do custo de fabrica do carro? "))
let porcentagemDist = parseFloat(prompt("Qual é a porcentagem que o ditribuidor cobra? "))
let imposto = parseFloat(prompt("Quanto de imposto é cobrado sobre o valor do custo de fabrica? "))

document.write("O custo de fabrica é: ", custoFab, "</br>")
document.write("O custo total para o consumidor é: ", custoFab + custoFab*porcentagemDist/100 + custoFab*imposto/100)