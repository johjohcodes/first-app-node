function getMin(number){
    if (number.length === 0) {
        throw new erro ('Array cannot be empty');

    }
    if (number.length === 1) {
        return number[0];
    }

    for(let i = 1; i < number.length; i++){
        if (number[i]< min){
            min  = number[i]
        }
    }
    let min = number[0]


    return min;
}

const arryNumber = [9,4,3,5]

const currentMin = getMin(arryNumber);

console.log(currentMin);


function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function getRandomPrime(min = 2, max = 100) {
    let prime = null;
    while (!prime) {
        let candidate = Math.floor(Math.random() * (max - min + 1)) + min;
        if (isPrime(candidate)) {
            prime = candidate;
        }
    }
    return prime;
}

function meanOfRandomPrimes(count = 5) {
    const primes = [];
    while (primes.length < count) {
        const p = getRandomPrime();
        primes.push(p);
    }
    const sum = primes.reduce((acc, val) => acc + val, 0);
    return sum / count;
}

const mean = meanOfRandomPrimes();
console.log("Mean of 5 random primes:", mean);


