// Move the first letter of each word to the end of it, then add "ay" to the end of the word
function pigIt(str) {
    // Account for non letters by using regex
    return str.replace(/\w+/g, word => {
        let w = word.slice(0, 1)
        let restOfString = word.slice(1)
        return `${restOfString}${w}ay`
    })
}