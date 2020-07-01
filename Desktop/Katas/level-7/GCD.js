// Given the sum and gcd of two numbers, return those two numbers in ascending order.
function solve(x, y) {
    return x % y ? -1 : [y, x - y];
}