// Write a function that reverses the bits in an integer
function reverseBits(n) {
    // Convert integer to binary, make that an array, reverse the order of array & join
    let num = n.toString(2).split('').reverse().join('');

    return parseInt(num, 2)
}