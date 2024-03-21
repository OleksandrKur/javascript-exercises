const repeatString = function(string, repetitionCount) {
    if(repetitionCount<0){
        return "ERROR"
    }
    let outputString = "";
    for (let i = 0; i < repetitionCount; i++){
        outputString = outputString + string;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
