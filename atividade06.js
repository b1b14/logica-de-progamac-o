// Criar uma função que receba o nome e a idade de uma pessoa e retorne uma mensagem informando se ela pode votar no Brasil.
// Regras para votação no Brasil:
//  Menores de 16 anos : Não pode votar. 
// Entre 16 e 17 anos ou acima de 70 anos: O voto é facultativo
// Entre 18 e 70 anos: O voto é obrigatório.


const podeVotar =(idade) => {
    if (idade < 16){
      return "Não pode votar";  
    }else if (idade >= 18 && idade < 70){
    return "Pode votar";
    }else {
        return "voto facultativo";
    }
}
var nome = ["Ygona","Batata","Fernanda","Cristinne"];
console.log("olá", nome[0],"você tem 16 anos e", podeVotar(16));
console.log("olá", nome[1],"você tem 22 anos e", podeVotar(22));
console.log("olá", nome[2],"você tem 12 anos e", podeVotar(12));
console.log("olá", nome[3],"você tem 67 anos e", podeVotar(67));

