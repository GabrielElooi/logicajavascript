var salarios = [1500.35, 4838.70, 10525.14, 3250.90];

var contador = 0;
var totalSalario = 0;

for(contador = 0; contador <= 3; contador ++){
 var totalSalario = totalSalario + salarios[contador];  
}
console.log("Essa folha ja é de: ",totalSalario);