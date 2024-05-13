// **2.** **Calculați suma numerelor dintr-un șir de numere**
// Vă puteți crea propriul șir de numere, dar luați în considerare să încercați această problemă cu câteva seturi diferite pentru a vă verifica soluția. De asemenea, puteți încerca să utilizați matrice de lungimi diferite.
// Exemplu 1:
// `Input: [1, -5, 20, -34, 16, 29, 36, -4]`
// `Output: 59`
// Exemplu 2:
// `Input: [3.45, -2.68, 356, -75.96, 64, 19.28]`
// `Output: 364.09000000000003`

let numbers = [1, -1, 1, 2, -2]
let sum = 0
let product = 1
for (let i = 0; i < numbers.length; i++) {
       sum += numbers[i];
       product *= numbers[i];
}
let difference1 = sum - numbers[0]

let difference2 = - sum

let difference3 = - numbers[0]

console.log("Suma este:      ", sum);
console.log("Diferenta1 este: ", difference1);
console.log("Diferenta2 este: ", difference2);
console.log("Diferenta3 este: ", difference3);
console.log("Produsul este:  ", product);
