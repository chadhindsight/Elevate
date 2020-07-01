// Check if a string has duplicates and return them as new string
function onlyDuplicates(str) {
    return str.split('').filter(x => str.indexOf(x) != str.lastIndexOf(x)).join('')
}
