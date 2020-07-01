// Check if an array has duplicates using frequency counter method
function areThereDuplicates() {
    let collection = {}
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for (let key in collection) {
        if (collection[key] > 1) return true
    }
    return false;
}

//DIFFERENT! Remove duplicate members from an array
function Remove(arr) {
    let frequencyCounter = {}

    for (let val of arr) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1
    }
    let newArr = []
    // LOOP OBJECT
    for (let [deez, val] in frequencyCounter) {
        if (val != 2) { newArr.push(deez) }
    }
    return newArr

}