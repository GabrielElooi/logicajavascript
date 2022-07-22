'use strict';
import { dividir } from "./utilsStrict.js";

try{
    var resultado = dividir(85, true);
    console.log("Resultado da divisão é: ",resultado);
}catch(erro){
    console.log("Erro: ",erro.message);
}finally{
    console.log("Programa Encerrado");
}
