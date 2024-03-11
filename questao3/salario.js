let salarioAtual = parseFloat(prompt("Digite o seu salário atual: "))
let reajuste = parseFloat(prompt("Digite a porcentagem que vai ser reajustado, esse número já vai representar a porcentagem. Ex.: 15. "))

let salarioNovo = salarioAtual * reajuste / 100 + salarioAtual

document.write("O novo salário reajustado é: R$" + salarioNovo)