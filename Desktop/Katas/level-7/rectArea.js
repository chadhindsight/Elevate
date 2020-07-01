// Find are of rectangle given one side and the diagonal
function area(d, l) {
    return d <= l ? "Not a rectangle" : +(l * Math.sqrt((d * d) - (l * l))).toFixed(2);
}