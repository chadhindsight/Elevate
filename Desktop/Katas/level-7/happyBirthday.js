// find base of number by dividing by 2
function womensAge(n) {
    return `${n}? That's just ${20 + n % 2}, in base ${Math.floor(n / 2)}!`
}