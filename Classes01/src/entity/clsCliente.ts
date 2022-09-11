export default class clsCliente{
public nome: string
public endereco: string
public idade: number
private sobrenome: string = ""
private _CPF: string = ""

constructor(nome: string, endereco: string, idade: number){
this.nome = nome
this.endereco = endereco
this.idade = idade
}

public setSobrenome(sobrenome: string):void{
    this.sobrenome = sobrenome
}

public getNomeCompleto(): string {
return this.nome.concat(this.sobrenome) 
}

public get CPF(){
    console.log("Retornando o valor dentro de get CPF")
    return this._CPF
}

public set CPF(cpf: string) {
    console.log("Valor atual do CPF: ",this.CPF)
    console.log("Atribuindo o valor dentro de Set CPF")
this._CPF = cpf
}
 
}
