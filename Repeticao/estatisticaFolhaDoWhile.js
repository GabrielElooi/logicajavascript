var salarios = [1500.35, 4838.70, 10525.14, 3250.90, 8765.15];

var totalSalario = 0; // Somatória total
var contador = 0;
var mediaSalarios = 0; // Somatória total / Elementos do Array
var menorSalario = salarios[0]; // Comparo com o maior anterior e troco se for o caso
var maiorSalario = salarios[0]; // Comparo com o menor anterior e troco se for o caso*/
do{
    totalSalario += salarios[contador];
if (salarios[contador] < menorSalario){
    menorSalario = salarios[contador]
};
if (salarios[contador] > maiorSalario){
    maiorSalario = salarios[contador]
};

    contador++
} while (contador <= salarios.length - 1);

mediaSalarios = totalSalario / salarios.length;

console.log("Total da Folha: ",totalSalario.toFixed(2));
console.log("Menor salário: ",menorSalario.toFixed(2));
console.log("Maior salário: ",maiorSalario.toFixed(2));
console.log("Média salarial: ",mediaSalarios.toFixed(2));
