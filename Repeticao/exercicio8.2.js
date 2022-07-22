const cep = "35.501-251";
for(cep = 0; cep.length < 11; cep++){
    cep.charAt(2) == "." && cep.charAt(6) == "-" && cep.substring(0,2) >= 0 && cep.substring(3,6) >= 0 && cep.substring(7) >= 0
    console.log("cep valido")
}
console.log("cep invalido")