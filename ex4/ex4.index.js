function countCharType(str, charType) {
  let count = 0;
  let set = "";

  switch (charType) {
    case "vowels":
      set = "aăeiîouAĂEIÎOU";
      break;
    case "consonants":
      set = "bcdfghjklmnpqrsștțvwxzBCDFGHJKLMNPQRSȘTȚVWXZ";
      break;
    case "symbols":
      set = "?/>.<,;:'[]{}-_=+`~";
      break;
    default:
      return "Invalid character type";
  }

  for (let i = 0; i < str.length; i++) {
    if (set.indexOf(str[i]) !== -1) {
      count++;
    }
  }

  return count;
}

let string = "Ce mai faci ?";
console.log("");
console.log("Stringul testat este: ", string);
console.log("");
console.log("Numarul de vocale este: ", countCharType(string, "vowels"));
console.log("");
console.log("Numarul de consoane este: ", countCharType(string, "consonants"));
console.log("");
console.log("Numarul de simboluri este: ", countCharType(string, "symbols"));
console.log("")