//  Insert an asterisk (*) between every pair of even digits in the given input, and return it as a string.

function asteriscIt(n = '') {
    return n.toString().replace(/([02468])(?=[02468])/g, '$1*');
};