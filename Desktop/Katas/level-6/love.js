// Love Language
const loveLanguage = (partner, weeks) => {
    const loves = ["words", "acts", "gifts", "time", "touch"].map(lang => ({ lang, count: 0 }));
    for (let day = 0; day < weeks * 7; day++) {
        const love = loves[day % 5];
        love.count += partner.response(love.lang) === 'positive' ? 1 : 0;
    }
    // Set language based on what the value of count is
    return loves.reduce((a, b) => a.count > b.count ? a : b).lang;
}