/*A program that uses a loop to reverse a string entered by the user without using any built-in reverse method.*/

let prompt =require("prompt-sync")();

let word = prompt("Enter a word: ");
let reversedWord = "";

for(count = word.length - 1; count >= 0; count--){
reversedWord = reversedWord + word[count];  
    }
    
console.log("The Original word: "+word);
console.log("The Reversed word: "+reversedWord);
