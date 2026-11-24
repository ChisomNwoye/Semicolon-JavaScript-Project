/*A program that uses a loop to compute and display the running average of the numbers entered by the user, updating and printing the average after each new input. stop when the user enters -1.*/

const prompt = require("prompt-sync")();

let number = 0;
let sum = 0;
let count = 0;
let average = 0;

while(number !== -1){

    number = Number(prompt("Enter a number (enter -1 to stop): "));
    if (number !== -1){
    sum = sum + number;
    count = count + 1;
    average = sum / count;
    
    console.log("Your Running Average: " + average.toFixed(3));
    }
}

