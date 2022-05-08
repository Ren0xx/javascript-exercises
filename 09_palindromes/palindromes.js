const palindromes = function (string) {
    let first = string
            .toLowerCase()
            .split('')
            .filter((a) => a != '!' && a != ',' && a != '.')
            .join('')
            .replace(/ /g, "");
    let second = first.split("").reverse().join("");
    return first === second;
};


// Do not edit below this line
module.exports = palindromes;
