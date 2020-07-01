// calculate the total points a team got. Either 3 for wins, 1 for draws
const points = games => games.reduce((output, current) => {
    return output += current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0;
}, 0)