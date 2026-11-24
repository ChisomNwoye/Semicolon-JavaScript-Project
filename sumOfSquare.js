/*A program that uses nested loops to print all three-digit numbers where the sum of the square of the digits equals the number itself.*/


 
let count;
let number;
let numberExtract;
let numberRemainder;
let numberExtractSquare;
let sumOfnumberExtractSquare;

for (number = 100; number <= 999; number++) {

    numberRemainder = number;
    sumOfnumberExtractSquare = 0;

    for (count = 1; count <= 3; count++) {

        numberExtract = numberRemainder % 10;

        numberExtractSquare = numberExtract * numberExtract;

        sumOfnumberExtractSquare = sumOfnumberExtractSquare + numberExtractSquare;

        numberRemainder = Math.floor(numberRemainder / 10);
    }

    if (sumOfnumberExtractSquare === number) {

        console.log(number);

    }
}
     
  
