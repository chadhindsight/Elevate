let arr = [1, 2, 3, 4, 6, 7, 8, 10] 
//RETURN A NEW ARRAY OF NUMBERS NOT CONSECTUTIVE IN OLD ARRAY
function allNonConsecutive (arr) {
    let result = [];
    arr.forEach((val, index) => {
        if (val !== arr[index - 1] + 1 && index) {
            result.push({i: index, n: val});
        }
    });
    return result;
}