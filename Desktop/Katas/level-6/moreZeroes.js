// Create a moreZeros function which will receive a string for input, and return an array containing 
// only the characters from that string whose binary 
// representation of its ASCII value consists of more zeros than ones.
function moreZeros(s) {
    return [...new Set([...s].filter((qure) => {
        let f = qure.charCodeAt(0).toString(2).replace(new RegExp('0', 'g'), '').length,
            g = qure.charCodeAt(0).toString(2).replace(new RegExp('1', 'g'), '').length;
        return g > f
    }))]
}