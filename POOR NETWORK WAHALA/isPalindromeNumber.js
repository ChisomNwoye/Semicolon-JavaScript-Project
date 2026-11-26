function isPalindromeNumber(number){
    let originalNumber = number;
    let reversedNumber = 0;
    
    while(number > 0){
        let extractedDigit = number % 10;
        reversedNumber = reversedNumber * 10 + extractedDigit;
        number = Math.floor(number/10);
    }
    return originalNumber == reversedNumber;

}   

console.log(isPalindromeNumber(1232));
