const sumAll = function(firstNum, secondNum) {
    if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
        return "ERROR";
    }

    const a_1 = Math.min(firstNum, secondNum);
    const a_2 = Math.max(firstNum, secondNum);

    if (a_2 <= 0 || a_1 <= 0){
        return "ERROR";
    }
    return (a_1 + a_2)*(a_2 - a_1 + 1) / 2;

};

// Do not edit below this line
module.exports = sumAll;
