//Laço de repetição -FOR

//o professor te colocou de castigo e pediu para você escrever mil vezes a frase " eu vou prestar atenção na aula"
for(let i = 0; i < 1000; i++){
    console.log("eu vou prestar atenção na aula.");
}

//escreva todos os numeros de 1 a 20 com loop for
for(let a = 1; a <= 20; a++) {
    console.log(a);
}

//mostre no console no sistema os numeros pares entre 1 e 20
for(let i = 1; i <= 20; i++) {
    i % 2 == 0 && console.log(i);
}
console.log("-----------------------------------------");
//dado um vetor, calcule e eiba o somatorio de seus elementos
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.log(numeros.length);
var soma = 0
for (let i = 0; i < numeros.length;i++){
     soma+=numeros[i];
}
console.log("soma dos elementos:", soma);

console.log("-----------------------------------------");
// dado de um vetor,calcule e exiba a qualidades de numeros impares e pares
var numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2];
var pares =0;
var impares = 0;
for(let i = 1; i <= numeros.length; i++) {
    numeros[i] % 2 == 0 ? pares++ : impares++;
}
console.log("total de pares:",pares);
console.log("total de impares:", impares);

console.log("-----------------------------------------");
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.table(numeros);

for (let i = 0; i < numeros.length; i++) {
    numeros[i] *=3;
}
console.log("Multiplicação por 3:", numeros);
console.table(numeros);

//dada uma matriz 2x3, mostre ao usuario todos os seus elementos com respectivas posições
var matriz = [
    [8, 4, 1],
    [3, 7, 8],
];
for (let linha =0;linha < matriz.length;linha++) {
    for(let coluna = 0; coluna<matriz[0].length;coluna++)
        {
        // console.log("matriz[",linha,"][", coluna, "]=",
        //  matriz[linha][coluna]);
        console.log(`matriz[${linha}][${coluna}] = ${matriz
            [linha][coluna] } `);
    }
}
console.table(matriz);
console.log("matriz [linha 0 coluna 0] =",matriz [0][0]);
