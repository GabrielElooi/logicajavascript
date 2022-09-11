import fs from 'node:fs/promises'

function lerArquivo(nomeArquivo:string): Promise<string> {

return new Promise((resolve,reject) => {
    fs.readFile(nomeArquivo).then((conteudo) => {  //Execução Assíncrona
        resolve(conteudo.toString())
    }).catch(err => {
        reject("Erro na leitura do arquivo")
    })
}) 
}   

lerArquivo("arquivo.txt").then(rs => {
console.log("Resultado da leitura do arquivo: ",rs)  //Execução Assíncrona
}).catch(err => {
    console.log("Erro na leitura do arquivo. Motivo: ", err)
})