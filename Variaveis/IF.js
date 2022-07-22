const LIMITE_METRAGEM_ISENTO = 250;
const IMPOSTO_POR_M2_EXCEDENTE = 12.25;

var tamanhoImovel = 12*30;
var valorImposto = 0;

if(tamanhoImovel > LIMITE_METRAGEM_ISENTO) {
 valorImposto = (tamanhoImovel - LIMITE_METRAGEM_ISENTO) * IMPOSTO_POR_M2_EXCEDENTE;
 console.log('Valor do imposto: ',valorImposto.toFixed(2));
}else{
    console.log("Você foi insento do imposto");
}


