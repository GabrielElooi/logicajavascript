/*var contador = 100;
while(contador >= 1){
  console.log(contador);
  contador--
}*/
/*var contador = 0;
while(contador <= 100){
    console.log(contador);
    contador = contador + 2;
}*/
const NUMERO = 2;
var tabuada = 2;
while(tabuada <= 20){
    console.log(tabuada.toString()
    .concat(" x ")
    .concat(NUMERO.toString())
    .concat(" = ")
    .concat(tabuada * NUMERO).toString());
    tabuada++
}