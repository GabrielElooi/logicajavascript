const VALORETANOL = 4.55;
const VALORGASOLINA = 5.55;

const KMETANOL = 5.3;
const KMGASOLINA = 5.5;

const RENDIMENTOETANOL = VALORETANOL/KMETANOL;
const RENDIMENTOGASOLINA = VALORGASOLINA/KMGASOLINA;

if(RENDIMENTOETANOL > RENDIMENTOGASOLINA){
    console.log("Abasteça com Etanol");
}else if(RENDIMENTOGASOLINA > RENDIMENTOETANOL){
    console.log("Abasteça com gasolina");
}else {
    console.log("Rendimento igual. Pode abastecer com oq você achar melhor.");
}