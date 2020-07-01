//Return all pairs of integers from a given collection of integers that have a difference of 2
function twosDifference(input) {
    return input
        .sort(function (a, b) {
            return a - b
        })
        .filter(function (a) {
            return input.indexOf(a + 2) != -1
        })
        // Difference of two
        .map(function (a) {
            return [a, a + 2]
        })
}
