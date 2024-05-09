// **2.** **Calculați suma numerelor dintr-un șir de numere**
// Vă puteți crea propriul șir de numere, dar luați în considerare să încercați această problemă cu câteva seturi diferite pentru a vă verifica soluția. De asemenea, puteți încerca să utilizați matrice de lungimi diferite.
// Exemplu 1:
// `Input: [1, -5, 20, -34, 16, 29, 36, -4]`
// `Output: 59`
// Exemplu 2:
// `Input: [3.45, -2.68, 356, -75.96, 64, 19.28]`
// `Output: 364.09000000000003`

let numbers = [156, -1, -1, 34, -1, 12, 46, 2]
let sum = 0
let product = 1
for (let i = 0; i < numbers.length; i++) {
       sum += numbers[i];
       product *= numbers[i];
}
let difference = sum - numbers[0]

console.log("Suma este:      ", sum);
console.log("Diferenta este: ", difference);
console.log("Produsul este:  ", product);
