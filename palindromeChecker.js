/*A program that uses a loop to check whether a string entered by the user is a palindrome*/


let prompt = require("prompt-sync")();

let word = prompt("Enter a word you want to check: ");
let reversedWord = "";
let count;

for(count = word.length -1; count >=0; count--){
    reversedWord = reversedWord + word[count];    
    }

if(word===reversedWord){
    console.log(word + " is a Palindrome.");
    }

else{
    console.log(word + " is Not a Palindrom.");
    }
