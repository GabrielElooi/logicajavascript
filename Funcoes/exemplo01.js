//FUNCTION MEDIA
const NOTAS = [5, 9, 7.5, 8.6, 3, 6.4];

function media(vetor =[]){
var soma = 0;
for(var contador = 0; contador < vetor.length; contador++){
    soma = soma + vetor[contador];
  
}
return soma / vetor.length;

}

console.log(media(NOTAS).toFixed(2));
console.log(NOTAS);