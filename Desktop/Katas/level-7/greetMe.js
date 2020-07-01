// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point
var greet = function (name) {
    let t = name.toLowerCase().slice(0, 1)
    // Get the rest of the string
    let restOfString = name.toLowerCase().slice(1)
    
    return `Hello ${t.toUpperCase()}${restOfString}!`
};