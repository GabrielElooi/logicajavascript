var numeros = [4, 6, 12, 55, 70, 9, 18, 67];

contador = 0;
somaNumeros = 0;
mediaNumeros = 0;
par = 0;
impar = 0;
somaPar = 0;
somaImpar = 0;

for(contador = 0; contador < numeros.length; contador++){
    somaNumeros += numeros[contador];
    if(numeros[contador] % 2 == 0){
        par++;
        somaPar += numeros[contador];
    }else{
        impar++;
        somaImpar += numeros[contador];
    }
}
mediaNumeros = somaNumeros / numeros.length;

console.log("A soma dos números deste Array é de:",somaNumeros);
console.log("A média dos números deste Array é de:",mediaNumeros.toFixed(2));
console.log("A quantidade de números pares deste Array é de: ",par);
console.log("A quantidade de números ímpares deste Array é de: ",impar);
console.log("A média dos valores pares é de: ",(somaPar/par).toFixed(2));
console.log("A média de números ímpares é de: ",(somaImpar/impar).toFixed(2));