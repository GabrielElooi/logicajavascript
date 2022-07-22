/*for(var contador = 100; contador >= 1; contador--){
    console.log(contador);
}*/
/*for(var contador = 0; contador <= 100; contador = contador + 2){
    console.log(contador);
}*/
const NUMERO = 2;

for (var tabuada = 2; tabuada <= 20; tabuada++){
    console.log(tabuada.toString()
    .concat(" x ")
    .concat(NUMERO.toString())
    .concat(" = ")
    .concat(tabuada * NUMERO).toString());
}