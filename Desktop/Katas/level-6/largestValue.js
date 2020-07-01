// You are given a positive integer (n), and your task is to find the largest number less than n, 
// which can be written in the form a**b, 
// where a can be any non-negative integer and b is an integer greater than or equal to
function largestPower(n) {
    if (n === 1) return [0, -1];
    if (n <= 4) return [1, -1];
    const sum = [];
    for (let i = 2; i * i < n; i++)
        for (let j = 2; i ** j < n; j++)
            sum.push(i ** j);
    const max = Math.max(...sum);
    return [max, sum.filter(item => item === max).length];
}