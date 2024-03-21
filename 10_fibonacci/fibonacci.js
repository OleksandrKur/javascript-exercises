const fibonacci = function(n) {
    n = Number(n);

    if (n < 0 || n === NaN){
        return "OOPS";
    }
    if (n === 0){
        return 0;
    }
    
    if(n === 1 || n === 2){
        return 1;
    }
    return fibonacci(n-2) + fibonacci(n-1);
};

// Do not edit below this line
module.exports = fibonacci;
