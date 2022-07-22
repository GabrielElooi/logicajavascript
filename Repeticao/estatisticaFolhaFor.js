var salarios = [1455.35, 4838.70, 10525.14, 3250.90, 7500.50, 13650.56];

var contador = 0;
var totalSalario = 0;
var menorSalario = salarios[0];
var maiorSalario = salarios[0];
var mediaSalarios = 0;

for(contador = 0; contador < salarios.length; contador++){
    totalSalario += salarios[contador];
    if (salarios[contador] < menorSalario){
        menorSalario = salarios[contador];
    }
    if(salarios[contador] > maiorSalario){
        maiorSalario = salarios[contador];
    }
}

mediaSalarios = totalSalario / salarios.length;

console.log("A soma dos salários é de: ",totalSalario.toFixed(2));
console.log("O menor salário é de: ",menorSalario.toFixed(2));
console.log("O maior salário é de: ",maiorSalario.toFixed(2));
console.log("A média de salários é de: ",mediaSalarios.toFixed(2));