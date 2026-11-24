/*A program that uses a loop to display all characters in a string entered by the user that are at even index positions*/

let prompt = require("prompt-sync")();
let word = prompt("Enter a word: ");
let count;
let atEvenIndex;

for(count =0; count < word.length; count +=2){
    atEvenIndex = word[count];
    console.log(atEvenIndex);
    }

