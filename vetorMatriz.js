// var numeros = [1, 2, 3, 4, 5];
// console.log(numeros);      //imprimindo os dados do array.
// console.table(numeros);   //imprimindo os dados em forma de tabela.
// console.log(numeros[1]); //imprimindo o item de indice
// console.log("o vetor tem:", numeros.length, "elementos.");
console.log("-----------------------------------------------------------");
var dinos = [
  "Tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Titanossauro",
];
console.log(dinos); //imprimindo os dados dos dinos
console.table(dinos); //imprimindo em forma de tabela
console.log("O vetor dinos tem:", dinos.length, "elementos.");

//adicionando elementos a um valor existente
dinos.push("Brontossauro"); //add um elemento no final do vetor.
console.table(dinos);
console.log("O vetor dinos tem:", dinos.length, "elementos.");

dinos.unshift("Tricerátops"); //add um elemento no inicio do vetor.
console.table(dinos);
console.log("O vetor dinos tem:", dinos.length, "elementos.");

//obtendo um elemento com base em seu indice  (posição)
console.log("1° posição:", dinos[0]);
console.log("3° posição:", dinos[2]);
console.log("20° posição:", dinos[19]); //quando nao temos o item, apresenta um erro (underfined).
console.log(
  "--------------------------------------------------------------------"
);
dinos[3] = "velociraptor";
console.table(dinos);
console.log(
  "--------------------------------------------------------------------"
);
//removendo elementos do vetor.
var dinos = [
  "Tiranossauro Rex",
   "velocirapitor",
   "Estegossauro",
  "Anquilossauro",
  "Titanossauro",
];
console.table(dinos);

dinos.pop(); //remove o ultimo elemento do array (vetor)
console.table(dinos);

dinos.shift();//removendo o primeiro elemento do array
console.table(dinos);

dinos.splice(1, 1);
console.table(dinos); 

var dinos = [" triceratops","tiranossauro rex", "estegonossauro", "anquilossauro", "brontossauro","ictiossauro", "pterodatilo"," espinossauro"];

console.table(dinos);

var elementoProcurado = "pterodatilo";
var posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "está no indice:", posicao);

elementoProcurado = "estegossauro";
posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "está no indice:", posicao);

elementoProcurado ='castelossauro';
posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "está no indice:", posicao);
console.log("indexOf = -1 significa que o elemento não foi encontrado no vetor!");

var elementoExcluir = "pterodstilo"
var posicao = dinos.indexOf(elementoExcluir);
dinos.splice(posicao, 1);
console.table(dinos);

//criando uma copia de array
var copia = dinos.slice();
console.log("copiando um vetor");
console.table(copia);


//criando um array numerico
var numeros = [4, 3, 1, 9, 7, 2];
console.table(numeros);

//imprimindo os elementos das posições impares 
console.table(numeros[1]);
console.table(numeros[3]);
console.table(numeros[5]);

// verificando se array contem um item
console.log("contem 9:", numeros.includes(9));
var contem0 = numeros.includes(0);
console.log("contem 0:", contem0);


// ordenando os elementos do vetor
 numeros.sort();
 console.table(numeros);

 //invertandos a ordem ou posição dos itens
 numeros.reverse();
 console.table(numeros);

 // Alterando o valor de um elemento com base em sua posição
 numeros[2] = 5;
 console.table(numeros);
 
 numeros[0] = 3;
 console.table(numeros);
 numeros[5] = numeros[0] + numeros[1];
 console.table(numeros);

 //criando array hibridos
 var hibridos = [10, "pafuncio", 3.45,"zuleika", 7];
console.table(hibridos);
  
  hibridos[1] = 9;
  console.table(hibridos);

  hibridos[0] ="tiburcio";
  console.table(hibridos);

  //criando uma matriz
  var matriz =[  [9, 0,1],[7, 1, 2],[1,3, 9]];
  console.table(matriz);

  //obtendo elemento com base em seu indicies 
  console.log("matriz [1,2] =", matriz[1][2]);
  console.log("matriz [2,0] =", matriz[2][0]);

//alterendo valores de elementos com base em seu indices
matriz[1][2] = 20;
matriz[2][0] = 30;
console.table(matriz);
