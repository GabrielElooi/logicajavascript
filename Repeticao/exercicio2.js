var par = 0;
var impar = 0;
var somaPar = 0;
var somaImpar = 0;

for(var numero = 1; numero <= 100; numero++){
    if(numero % 2 == 0){
        par++
        somaPar = somaPar + numero;
    }else{
        impar++
        somaImpar = somaImpar + numero;

    }
}
console.log("Quantidade de números pares: ",par);
console.log("Quantidade de números ímpares: ",impar);
console.log("Média dos valores pares: ",somaPar/par);
console.log("Média dos valores ímpares: ",somaImpar/impar);