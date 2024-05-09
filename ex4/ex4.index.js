// **4.** **Returnează numărul de vocale dintr-un șir de caractere (string)**
// Creați o funcție care va returna un număr întreg al numărului de vocale găsite într-un șir. Aceasta este o modalitate excelentă de a practica determinarea caracteristicilor unui set de date.
// Exemplu 1:
// `Input: “string de test”`
// `Output: 3`
// *Explicație: Parcurgeți șirul și verificați fiecare caracter individual. Dacă este vocală, atunci o variabilă își mărește valoarea*
// *(adaugă +1). În șirul nostru de intrare avem vocalele: i, e, e ⇒ 3.*
// **Încărcă link-ul de Replit ce conţine rezolvările cerinţelor, folosind *Text reply***

function countVowels(str) {
       let vowels = "aăeiîouAĂEIÎOU";
       let cvowels = 0;
       
       for (let i = 0; i < str.length; i++) {

              if (vowels.indexOf(str[i]) !== -1) {
                     cvowels++;
              }
       }
       return cvowels;
}

function countConsonants(str) {
       let consonants = "bcdfghjklmnpqrsștțvwxzBCDFGHJKLMNPQRSȘTȚVWXZ";
       let cconsonants = 0;

       for (let i = 0; i < str.length; i++) {

              if (consonants.indexOf(str[i]) !== -1) {
                     cconsonants++;
              }
       }
       return cconsonants;
}

function countSymbols(str) {
       let symbols = "?/>.<,;:'[]{}-_=+`~";
       let csymbols = 0;

       for (let i = 0; i < str.length; i++) {

              if (symbols.indexOf(str[i]) !== -1) {
                     csymbols++;
              }
       }
       return csymbols;
}

let string = "Ce mai faci ?"
console.log("")
console.log("Stringul testat este: ", string);
console.log("")
console.log("Numarul de vocale este: ", countVowels(string));
console.log("")
console.log("Numarul de consoane este: ",countConsonants(string));
console.log("")
console.log("Numarul de simboluri este: ", countSymbols(string));
console.log("")