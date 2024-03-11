let carrosVendidos = parseInt(prompt("Quantos carros foramm vendidos? "))
let valorTotVendas = parseFloat(prompt("Qual é o valor total das vendas? "))
let salarioFixo = parseFloat(prompt("Qual é o salário fixo do vendedor? "))
let comissaoCarroVendido = parseFloat(prompt("Quanto o vendedor recebe por carro vendido? "))

document.write("O salário final do vendedor é: R$ ", salarioFixo + comissaoCarroVendido * carrosVendidos + (5/valorTotVendas*100))
