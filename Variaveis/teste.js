var imposto = 15;
var salario = 2582.50;

console.log(imposto.toString().concat('%'));

console.log((salario*imposto / 100).toFixed(2));

console.log(salario - (salario * imposto /100).toFixed(2));