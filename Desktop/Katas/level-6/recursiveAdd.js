function digital_root(n) {
    if (n < 10) return n;
    // convert to array and reduce with type cohersion if n is more than one digit
    return digital_root(
        n.toString().split('').reduce(function (acc, d) { return acc + +d; }, 0));
}