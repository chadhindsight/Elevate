// check if string has all characters
function regexContainsAll(str) {
    let chars = str.split('');
    let pattern = '';
    // See if an individual character has whatever that string on 7 is
    chars.forEach(c => {
        pattern += `(?=.*${c})`;
    });
    return pattern;
}