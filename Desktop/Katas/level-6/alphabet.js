// Find longest substring in alphabetical order!
function longest(str, max = '') {
    const current = [...str].reduce((acc, char) => (
        char >= acc.slice(-1) ?
            acc + char : (max = acc.length > max.length ?
                acc : max, char)
    ), '');
    return current.length > max.length ? current : max;
}