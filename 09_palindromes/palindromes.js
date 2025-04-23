const palindromes = function (string) {
    let j = string.length - 1;
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] != string[j]) return false;
        j--;
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
