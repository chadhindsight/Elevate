//Count lowercase letters in a given string and return the letter count as key value pairs. so good
function letterCount(s) {
    let obj = {}
    // Split and sort the newly converted array and then check occurence of characters 
    s.split('').forEach(el => obj[el] ? obj[el]++ : obj[el] = 1)

    return obj;
}