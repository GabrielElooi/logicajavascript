var salarios = [1500.35, 4838.70, 10525.14, 3250.90];

var contador = 0;
var totalSalario = 0;

while (contador < salarios.length) {
    totalSalario = totalSalario + salarios[contador++];
}  


console.log("Total da Folha de Pagamento: ",totalSalario);