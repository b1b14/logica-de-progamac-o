var numeros = [1, 2, 3, 4, 5];
console.table(numeros);

console.log(numeros[2]);

var copia = numeros.slice();
console.table(copia);

//alterando o conteudo do vetor copia para seus valores sejam o dobro dos valores 
copia[0] = numeros[0] * 2;
copia[1] = numeros[1] * 2;
copia[2] = numeros[2] * 2;
copia[3] = numeros[3] * 2;
copia[4] = numeros[4] * 2;
console.table(copia);
 
//crie uma matriz 3x3
var matriz = [
    [9,0,1],
    [7,1,2],
    [6,2,8],
];
console.table(matriz);
  
console.log(matriz [0][0], "|", matriz [1][1], "|", matriz[2][2]);


