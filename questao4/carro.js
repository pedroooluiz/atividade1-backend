let custoFab = parseFloat(prompt("Qual é o valor do custo de fabrica do carro? "))

document.write("O custo de fabrica é: ", custoFab, "</br>")
document.write("O custo total para o consumidor é: ", custoFab + (custoFab*45/100) + (custoFab*28/100))