// a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of 
// times you must multiply the digits in num until you reach a single digit.
function persistence(num) {
    var times = 0;

    num = num.toString();

    while (num.length > 1) {
        times++;
        num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }

    return times;
}