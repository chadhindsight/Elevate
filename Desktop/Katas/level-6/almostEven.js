function splitInteger(num, parts) {
    const remainder = num % parts;
    const int = Math.floor(num / parts);
//The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length).
    return [...new Array(parts - remainder).fill(int),
    ...new Array(remainder).fill(int + 1)];
}