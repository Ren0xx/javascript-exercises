const fibonacci = function(n) {
    n = parseInt(n);
    if (n < 0) return 'OOPS';
    const arr = new Array(n).fill(0);
    arr[0] = 1;
    for (let i = 0; i < n; i++) {
        arr[i+1] += arr[i];        
        arr[i+2] += arr[i];        
    }
    return arr[n - 1];




};

// Do not edit below this line
module.exports = fibonacci;
