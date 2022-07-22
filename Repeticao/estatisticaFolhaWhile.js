var salarios = [1500.35, 4838.70, 10525.14, 3250.90, 8765.15, 12345.78];

var contador = 0;
var totalSalario = 0;
var menorSalario = salarios[0];
var maiorSalario = salarios[0];
var mediaSalarios = 0;

while(contador < salarios.length){
    totalSalario += salarios[contador++];
    if (salarios[contador] < menorSalario){
        menorSalario = salarios[contador]
    };
    if (salarios[contador] > maiorSalario){
        maiorSalario = salarios[contador]
    };

}

mediaSalarios = totalSalario / salarios.length;

console.log("O total da Folha é: ",totalSalario.toFixed(2));
console.log("O menor salário é: ",menorSalario.toFixed(2));
console.log("O maior salário é: ",maiorSalario.toFixed(2));
console.log("A média dos salários é: ",mediaSalarios.toFixed(2));