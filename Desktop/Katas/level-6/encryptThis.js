// The first letter needs to be converted to its ASCII code.
// The second letter needs to be switched with the last letter and then return new value of string
const encryptWord = w => {
    const first = w.charCodeAt(0);
    let res;
    switch (w.length) {
        case 0: return '';
        case 1: return first;
        case 2: res = [first, w[1]]; break;
        case 3: res = [first, w[2], w[1]]; break;
        default: res = [first, w.slice(-1), w.slice(2, -1), w[1]]; break;
    }
    return res.join('');
};

const encryptThis = text => text.split(' ').map(encryptWord).join(' ');