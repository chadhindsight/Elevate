// Object.entries() returns an array based on an object's [key, value] pairs
function myLanguages(results) {
    let arr = Object.entries(results)

    arr.filter(x => { return x > 60 })
}