// Oppgave 1

// const text = window.prompt("Skriv en tekst")

// function length() {
// if (text=="") {
//       return "Teksten er tom"
// } else {
//       return "Teksten er ikke tom"
// }
// }

// console.log(length(text));

// Oppgave 2

// const text2 ="Røyken Vidregående skole"

// function text(halo) {
// return(halo.split(" "))
// }
// console.log(text(text2));


// Oppgave 3

// const tekst = window.prompt("Skriv en tekst")

// function length(params) {
// var nyTekst= params.split("").reverse().join("");
// if (params== nyTekst) {
//       return `${params} er ikke palindrome`;
// } else {
//       return `${params} er palindrome`;
// }
// }

// console.log(length(tekst));

// Oppgave 4

// const Text3 = window.prompt("Skriv en tekst")
// const sortedText3 = sortLetters(Text3);

// function sortLetters(str) {
//     return str.split('').sort().join('');
//   }
  

//   console.log(sortedText3); 

// Oppgave 5

// var text = "Welcome to Norge";
// var letter = "o";

// function countLetterOccurrence(text, letter) {

//     text = text.toLowerCase();
//     var chars = text.split("");
  
//      var filteredChars = chars.filter(function (char) {
//       return char === letter;
//     });
  
//     return filteredChars.length;
//   }
  
//   var occurrenceCount = countLetterOccurrence(text, letter);
//   console.log(occurrenceCount);
  

// Oppgave 6 (for loop og substring eller slice)

function print(words, steps) {

 for (let i = 0; i < words.length; i += steps) {

    console.log(words.slice(i, i + steps));

 }

 }

const words = "ABCAABCAAADA";

const steps = 3;

print(words, steps);