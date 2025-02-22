//Condicional simples com IF
var anonascimento = 2003;
if (anonascimento > 2003) {
  console.log(" a pessoa nasceu depois de 2003");
}

if (anonascimento < 2003) {
  console.log(" a pessoa nasceu antes de 2003");
}

if (anonascimento == 2003) {
  console.log(" a pessoa nasceu em 2003");
}

//condições simples com if-else
var anonascimento = 2005;
if (anonascimento > 2000) {
  console.log("a pesssoa nasceu despois de 2000");
} else {
  console.log(" a pessoa nasceu em 2000 ou antes");
}
// condições compostas com if
const login = "admin";
const senha = "12345";

var loginUser = "admin";
var senhaUser = "12345";

if (loginUser == login && senhaUser == senha) {
  console.log("acesso permitido");
} else {
  console.log("acesso negado");
}
// Desvio condicional aninhado - IF-ELSE-IF-ELSE
var semafaro = "vermelho";

if (semafaro == "verde") {
  console.log("siga");
} else if (semafaro == "amarelo") {
  console.log("atenção");
} else {
  console.log("pare");
}

// desvio condicional if com bloco de comando
var idade = 18;

if (idade <= 18) {
  console.log("entrei no if...");
  idade++;
  console.log("incrementei a idade...");
  console.log("a nova idade é", idade);
  console.log("agora estou saindo do bloco if");
}
console.log("terminei");

// criando variaveis locais com "let" (so existe dentro do bloco onde foram criadas)
var mes = "agosto";
var dia = 15;

if (dia == 15 && mes == "agosto") {
  let mensagem = " hoje dia 15 de agosto";
  console.log(mensagem);
}
console.log("tentando acessar a variavel local fora do bloco, vai dar erro");
//console.log(mensagem);

// criando uma função
const desconto = (valorCompra) => {
  let desconto = 0;
  if (valorCompra >= 1000) {
    desconto = (valorCompra * 12) / 100;
  }
  return desconto;
};

var totalCompra = 950;
console.log(
  "valor total da compra: R$",
  totalCompra,
  "::: desconto : R$",
  desconto(totalCompra)
);
totalCompra = 1800;
console.log(
  "valor total da compra: R$",
  totalCompra,
  "::: desconto : R$",
  desconto(totalCompra)
);

//desvio condicional if inline ( terminario)
// condição ?: expressão_se_verdadeiro : expressão_se_falso
var preco = 500;
var resultado = preco <= 100 ? "ta barato!" : "vish, ta muito caro!";
// O operador acima é o mesmo que escrever:
// if(preco <=100){resultado = "tá barato!"}else{resultado = "Vish, tá muito caro"}
console.log("preço: R$", "-", resultado);

// if terminario com somente uma expressão
// condição && expressão
var logado = true;
logado && console.log("usuário está logado!");

// Devio condicional - Switch Case
console.log("------------------------Switch Case----------------------------");
switch (1) {
  case 1:
    console.log(" o usuário digitou o número 1!");
    break;

  default:
    console.log(" o usuario informou um numero diferente de 1!");
    break;
}
console.log("--------------------------------------------------------------");
// Menu de seleção
var menuSelecionado = "home";

switch (menuSelecionado) {
  case "home":
    console.log(" você clicou no link 'home'!");
    break;

  case "quem somos":
    console.log("você clicou no link 'quem somos'");
    break;

  case "Contato":
    console.log("você clicou no link 'Contato'");
    break;

  default:
    console.log("opção invalida de menu");
    break;
}

//Varias opções com o mesmo case - switch case
var mes = 15;

switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log("primeiro trimestre");
    break;

 case 4:
    case 5:
  case 6:
    console.log("segundo trimestre");
    break;

  case 7:
  case 8:
  case 9:
    console.log("terceiro trimestre");
    break;

    case 10:
        case 11:
        case 12:
          console.log("quarto trimestre");
          break;
  default:
    console.log("Mês invalido!");
    break;
}
