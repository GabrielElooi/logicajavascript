interface ClienteInterface{
    nome: string
    endereco: string
    profissao: string
    idade: number
}

let cliente: ClienteInterface
cliente = {
    nome : "Gabriel Eloi Cardoso",
    endereco: "Rua Guaporã",
    profissao: "Mercador",
    idade: 26

}
console.log(cliente)