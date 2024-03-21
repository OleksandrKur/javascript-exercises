const removeFromArray = function(array, ...args) {

    let newArray = array.filter((element) => {
        if(!Array.from(args).includes(element)){
            return element;
        }
        })
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
