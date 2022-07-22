//EXEMPLO MEDIA COM CALLBACK FUNCTION
const NOTAS = [5, 9, 7.5, 8.6, 3, 6.4];

function media(vetor =[]){
  
var soma = 0;

vetor.forEach((valorAtual) => {
soma = soma + valorAtual;
})

return soma / vetor.length;

}

console.log(media(NOTAS).toFixed(2));
console.log(NOTAS);