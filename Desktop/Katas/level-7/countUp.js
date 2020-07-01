// Write a function that accepts two arguments and generates a sequence containing the integers 
// from the first argument to the second inclusive.
function generateIntegers(m, n) {
    let arr = [m]
    if (m === n) return arr

    for (i = m; i < n; i++) {
        arr.push(i + 1)
    }
    return arr
}