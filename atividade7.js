//dada a matriz abaixo, faça um programa em JavaScript que exiba ao usuario os elementos da sua diagonal principal
// |  3  5  8  | 
// |  1  9  2  |
// |  7  1  4  |

var matriz = [
    [3, 5, 8],
    [1, 9, 2],
    [7, 1, 4],
];
for (let linha =0;linha < matriz.length;linha++) {
    for(let coluna = 0; coluna<matriz[0].length;coluna++){
     linha == coluna &&   
        console.log(`matriz[${linha}][${coluna}] = ${matriz[linha][coluna] } `);
    }
}

//dada a matriz abaixo, faça um programa em JavaScript que multiplique seus elementos por um valor x e
//  exiba ao usuario a matriz antes e apos a multiplicação
// |  3  5  8  | 
// |  1  9  2  |
// |  7  1  4  |

var matriz = [
    [3, 5, 8],
    [1, 9, 2],
    [7, 1, 4],
];
var x =10;
console.table(matriz);
 
for (let linha =0;linha<matriz.length;linha++) {
    for (let coluna =0;coluna<matriz.length;coluna++) {
        matriz[linha][coluna] *= x;
    }
}
console.table(matriz);

// faça um loop FOR onde apresente os numeros impares de 0 a 100;
//não pode ser resolvido com conta ou resto de divisão
console.log("numeros impares de 0 a 100");
for (let i = 0; i <= 100; i+= 2) {
    console.log(i);
}
console.log("numeros pares de 0 a 100");
for (let i = 0; i <= 100; i+= 2) {
    console.log(i);
}
