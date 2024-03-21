const sumAll = function(a, b) {
    //check if both numbers are integers
    if (!Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR"
    }
    //check if both numbers are positive
    if (a < 0 || b < 0){
        return "ERROR"
    }
    let sum = 0;
    for(let i = Math.min(a, b); i <= Math.max(a, b); i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
