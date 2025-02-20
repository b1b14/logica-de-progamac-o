// 1. Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa a retorne a sua idade
// 2. Crie uma função que receba a quantidade de combustível de um carro e retorne quantos kms ele pode  viajar com eese combustível. Considere que o veículo faz média de 12 kms/l

function nascimento(nome,ano,){
    let idade = 2025 - ano;
    console.log("a", nome, "nasceu no ano", ano,"e tem",idade,"anos");
}
nascimento("Bia", "2008");

const combustível=(litros)=> {
    return litros * 12;
};
var car1 = 20;
var car2 = 8;
var car3 = 2;
console.log("Carro 1: ",car1,"->",combustível(car1),"kms.");
console.log("Carro 2: ",car2,"->",combustível(car2),"kms.");
console.log("Carro 3: ",car3,"->",combustível(car3),"kms.");
