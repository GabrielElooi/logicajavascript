import clsCliente from "./entity/clsCliente";

let cliente01: clsCliente = new clsCliente("Gabriel","Rua Guapé", 22)
let cliente02: clsCliente = new clsCliente("Eduardo", "Av 21 de Abril", 25)
let cliente03: clsCliente = new clsCliente("Laura", "Av Tucuruça", 18)
cliente01.setSobrenome(" Eloi")


/*console.log("Cliente01 Nome: ",cliente01.nome, "Cliente01 Endereço: ",cliente01.endereco, "Cliente01 idade: ",cliente01.idade)
console.log("Cliente02 Nome: ",cliente02.nome, "Cliente02 Endereço: ",cliente02.endereco, "Cliente02 idade: ",cliente02.idade)
console.log("Cliente03 Nome: ",cliente03.nome, "Cliente03 Endereço: ",cliente03.endereco, "Cliente03 idade: ",cliente03.idade)*/
/*console.log("Nome completo do cliente: ",cliente01.getNomeCompleto())
console.log("Nome completo do aluno: ",cliente02.getNomeCompleto())*/

cliente01.CPF = "61738216378126376"
console.log(cliente01.CPF)

 
