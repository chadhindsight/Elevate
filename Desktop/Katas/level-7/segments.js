// Your task is to print all such points that don't belong to any segment
function segments(m, a) {
    let res = []
    // LOOP
    for (i = 0; i <= m; i++) {
        if (a.every(array => i < array[0] || i > array[1]))
            res.push(i)
    }
    return res
}