// Locat  the sequence(7,8,9) in an array of digits 
// and tell 7 to come after 9 instead.
const hungrySeven = arr => {
    let str = arr.join(``);
    while (/789/.test(str)) {
        str = str.replace(/789/g, `897`);
    }
    return [...str].map(Number)
}