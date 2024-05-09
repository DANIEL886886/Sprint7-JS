// **3. Creați o funcție care inversează un șir de numere**
// Vă puteți crea propriul șir de numere, dar luați în considerare să încercați această problemă cu câteva seturi diferite pentru a vă verifica soluția. De asemenea, puteți încerca să utilizați matrice de lungimi diferite. Un șir de numere va fi trimis ca date de intrare și, ca rezultat, funcția va returna un șir nou de numere cu elementele primului în ordine inversă.
// Exemplu 1:
// `Input: [1, -5, 20, -34, 16, 29, 36, -4]`
// `Output: [-4, 36, 29, 16, -34, 20, -5, 1]`

function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

let numbers = [1, -5, 20, -34, 16, 29, 36, -4];
console.log("Seria de numere initiale este: ")
console.log(numbers);
console.log("Seria de numere inversate este: ")
console.log(reverseArray(numbers));


let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
console.log("Seria de litere initiale este: ")
console.log(letters);
console.log("Seria de litere inversate este: ")
console.log(reverseArray(letters));