/*var contador = 100;

do{
    console.log(contador);
    contador--;

}while(contador >= 1);*/
/*var contador = 0;

do {
    console.log(contador);
    contador = contador + 2;

}while (contador <= 100);*/
const NUMERO = 2;
var tabuada = 2;
do{
    console.log(tabuada.toString()
    .concat(" x ")
    .concat(NUMERO.toString())
    .concat(" = ")
    .concat(tabuada * NUMERO).toString());
    tabuada++;
}while(tabuada <= 20);