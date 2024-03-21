const palindromes = function (string) {
    let regex = /[a-zA-Z0-9]/;
    let normal = string.split("").filter(character => regex.test(character)).join("").toLowerCase();
    let reversed = normal.split("").reverse().join("");
    return normal === reversed;
};

// Do not edit below this line
module.exports = palindromes;
