var salario = "R$ 1.935,60";
//1935.60

salario = salario.replace("R$","");
salario = salario.replace(" ","");
salario = salario.replace(".","");
salario = salario.replace(",",".");

var SALARIO = parseFloat(salario);

console.log(SALARIO * (1 + 10 / 100));
//console.log(SALARIO * 1.1);
//console.log(SALARIO + SALARIO * 10 / 100);


