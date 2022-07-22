'use strict';
var empresa = "Fleek Cursos";

try{
    //Bloco de código a ser testado(try)
nome = 'Gabriel';
}catch (err){
    //Executado em caso de erro
    console.log("Erro Gerado: ",err.message);
}finally{
    //Executado Sempre
    console.log("Bloco Finally");
}