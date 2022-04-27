const reverseString = function(string) {

    let revSrring = "";
    string.split("").forEach(char => revSrring = char + revSrring);
    return revSrring;
};

// Do not edit below this line
module.exports = reverseString;
