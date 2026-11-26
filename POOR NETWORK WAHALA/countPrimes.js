function countPrimes(upperLimit){
    let count = 0;
    for(primeCount = 2; primeCount < upperLimit; primeCount++){
        let isPrimeNumber = true;
        for(let modulusCount = 2; modulusCount < primeCount; modulusCount++){
            if (primeCount % modulusCount == 0){
                isPrimeNumber = false;
                break;
                }
            }
        if (isPrimeNumber){
            count++;
            }   
        }
    return count;
}

console.log(countPrimes(10));
