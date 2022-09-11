import { ClienteInterface } from "./interfaces/cliente.interfaces"

let cliente: ClienteInterface 

cliente = {
    nome: "Gabriel Eloi Cardoso",
    endereco: "Rua Guaporã, 1758",
    cpf: "134.456.678-90",
    profissao: "Encarregado de Setor",
    idade: 22
}

cliente.endereco = "Minas Gerais"


console.log(cliente)