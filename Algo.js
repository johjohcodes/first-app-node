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


