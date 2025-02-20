// 1. Crie um array de frutas com os seguintes elementos:banana, maçã, pera, uva, morango.
// 2. Adicione a tangerina no final.
// 3. Adicione a goiaba no inicio.
// 4. Exiba o conteudo do indice s.
// 5. Exclua oelemento uva.
// 6. Crie uma copia do array apenas com os elementos com indice 2, 3 e 4.

var frutas = [" banana","maçã","pera","uva","morango"];
console.table(frutas);
console.log("--------------------------------------------------------------");
frutas.push("tangerina");
console.table(frutas);
console.log("O vetor frutas tem:", frutas.length, "elementos.");
console.log("--------------------------------------------------------------");
frutas.unshift("goiaba");
console.table(frutas);
console.log("O vetor frutas tem:", frutas.length, "elementos.");
console.log("--------------------------------------------------------------");
console.log(frutas[5]);
console.log("--------------------------------------------------------------");

var posicao = frutas.indexOf("uva");
frutas.splice(posicao, 1); 
console.table(frutas);
console.log("--------------------------------------------------------------");
var copia = frutas.slice(2,5);
console.table(copia);