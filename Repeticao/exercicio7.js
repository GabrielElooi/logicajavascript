const CEP = ("35512514");

var cep = 0;
var cepString = "";

cep = parseInt(CEP);
cepString = String(cep);

if(cepString.length < 8 || cepString.length > 8){
    console.log("CEP INVÁLIDO!");
}else{
    cepString = cepString.substring(0,2)+'.'+ cepString.substring(2,5)+ '-'+cepString.substring(5,8);
    console.log("CEP Válido!", CEP);
    console.log("CEP Válido e com formato:", cepString);

}


