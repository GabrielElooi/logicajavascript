const NUMERO = 25;
var tabuada = 1;

do {
    console.log(tabuada.toString()
    .concat ( " x ")
    .concat(NUMERO.toString())
    .concat(" = ")
    .concat((tabuada * NUMERO).toString()));
    tabuada++
}
while((tabuada <= 10));