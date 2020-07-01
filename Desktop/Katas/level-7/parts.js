// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)
var splitInParts = function (s, partLength) {
    let parts = [];
    let array = s.split('');
    while (array.length) {
        parts.push(array.splice(0, partLength).join(''));
    }
    return parts.join(' ');
}