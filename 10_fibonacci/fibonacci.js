const fibonacci = function(number) {
    const fib = [0, 1];
    for (let i = 2; i < number; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[number]
};

// Do not edit below this line
module.exports = fibonacci;
