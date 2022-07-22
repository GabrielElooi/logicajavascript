//CALLBACK
function imprimirNome (nome) {
    console.log("Nome: ",nome);
}

function exemploCallBack (cb, parametro) {
    cb(parametro.toUpperCase());
}

exemploCallBack(imprimirNome, "Fleek");