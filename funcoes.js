// criando um função que soma dois valores e retorna o resultado
function somar2mais2() {
  return 2 + 2;
}
console.log(somar2mais2());

function somar(val1, val2) {
  return val1 + val2;
}
console.log("5 + 3 =", somar(5, 3));
console.log("12 + 8 =", somar(12, 8));
console.log("6,5 + 2,12 =", somar(6, 5, 2.12));

var v1 = 9;
var v2 = 6;
console.log("v1 + v2 =", somar(v1, v2));

//criando uma função que escreve bom dia
function bomDia(nome) {
  console.log("olá", nome, "\nBom dia para você!");
}
bomDia("Bia");

//criando uma função que calcula e retorno o desconto em uma venda
function desconto(valor) {
  return valor * 0.05;
}
console.log(
  " ode desconto do produto no valor de R$ 100,00 é R$",
  desconto(100)
);

var totalPedido = 300;
var totalDesconto = desconto(totalPedido);
var valorFinal = totalPedido - totalDesconto;

console.log("---------------------------------------------------");
console.log("total do pedido: R$", totalPedido);
console.log("total do desconto: R$", totalDesconto);
console.log("valor liquido: R$", valorFinal);
console.log("---------------------------------------------------");

// criando uma função que apresente pessoas com arrow function
const apresentaPessoas = (nomePessoa, idade, cidade) => {
    //apresento a vocês : "nome pessoas", que tem " XX " anos e mora em "cidade"
    console.log("Apresento a vocês:",nomePessoa,"que tem",idade,"anos e mora em",cidade);
}
apresentaPessoas("Zuleika", 19, "Brotas");
apresentaPessoas("Pafúncio", 21, "Jaú");
apresentaPessoas("Claudinha", 24, "Curitiba");
