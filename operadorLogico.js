// operadores lógicos
var souPobre = true;
console.log("----------------------------------------");
console.log(" Sou pobre?", souPobre);
console.log("Negação de soupobre;", !souPobre);

var manha = true;
var sono= true;
console.log("----------------------------------------");
console.log("manhã", manha, "| estou com sono?:", sono);

// condicional simples
console.log(" operador AND (E): ", manha && sono);
console.log(" operador OR(OU):", manha || sono);

manha = false;
console.log("----------------------------------------");
console.log("manhã", manha, "| estou com sono?:", sono);

console.log(" operador AND (E): ", manha && sono);
console.log(" operador OR(OU):", manha || sono);

sono =false;
console.log("----------------------------------------");
console.log("manhã", manha, "| estou com sono?:", sono);

console.log(" operador AND (E): ", manha && sono);
console.log(" operador OR(OU):", manha || sono);
