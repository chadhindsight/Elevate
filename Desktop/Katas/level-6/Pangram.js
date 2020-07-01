function isPangram(string) {
    // Find the none letters
    let regex = /[^a-z]+/gi;
    // Replace none letter with second arg
    const worth = string.toLowerCase().replace(regex, '');
    const itsMatched = new Set(Array.from(worth)).size;
    return itsMatched === 26;
}