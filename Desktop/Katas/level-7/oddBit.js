const MATCH = parseInt('10'.repeat(16), 2);
// Ask Stefan
function anyOdd(x) {
    return !!(x & MATCH) * 1;
}