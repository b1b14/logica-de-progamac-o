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
    for(let coluna = 0; coluna<matriz[0].length;coluna++)
        {
        // console.log("matriz[",linha,"][", coluna, "]=",
        //  matriz[linha][coluna]);
        console.log(`matriz[${linha}][${coluna}] = ${matriz
            [linha][coluna]} `);
    }
}