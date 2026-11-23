/*
(Divisible by 3) Write an application that reads an integer and determines and prints
whether it’s divisible by 3 or not. [Hint: Use the remainder operator. A number is divisible by 3 if it’s divided by 3 with a remainder of 0.]
*/


const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter an Integer: "));
if (number%3 == 0){
    console.log(number + " is Divisible by 3.");
    }
else{
    console.log(number + " is not Divisible by 3.");
    }
