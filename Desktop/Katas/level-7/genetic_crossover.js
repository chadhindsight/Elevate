//  to implement a function crossover that receives two chromosomes chromosome1, chromosome2 and a zero-based index and it has to return an array with 
// the crossover result on both chromosomes [chromosome1, chromosome2].

const crossover = (chromosome1, chromosome2, index) => {
    let x = chromosome1.split('')
    let y = chromosome2.split('')

    let swapx = x.splice(index, chromosome1.length)
    let swapy = y.splice(index, chromosome2.length)

    let newX = x.concat(swapy).join('')
    let newY = y.concat(swapx).join('')

    return [newX, newY]
}