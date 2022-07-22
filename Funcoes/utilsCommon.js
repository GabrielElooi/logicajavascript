function media(vetor =[]){
    var soma = 0;
    for(var contador = 0; contador < vetor.length; contador++){
        soma = soma + vetor[contador];
      
    }
    return soma / vetor.length;
    
    }

    exports.media = media;