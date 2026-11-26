function checkPerfectNumber(number){
let sumOfFactors = 0;
let count = 0;
for(count = 1; count <= (number-1); count++){
    if(number%count == 0){
        sumOfFactors = sumOfFactors + count;
        } 
    }
return sumOfFactors == number;
}

console.log(checkPerfectNumber(6));
