const cep = "48.000-AAA";

if(cep.charAt(2) == "." && cep.charAt(6) == "-" && cep.substring(0,2) >= 0 && cep.substring(3,6) >= 0 && cep.substring(7) >= 0 && cep.length == 10){
console.log("CEP VÁLIDO");
   }else{
    console.log("CEP INVÁLIDO");
   }




