var salarios = [1500.35, 4838.70, 10525.14, 3250.90];

var contador = 0;
var totalSalario = 0;

do {
    totalSalario = totalSalario + salarios[contador++];
}
while(contador <= 3);
console.log("Total da folha é: ",totalSalario);