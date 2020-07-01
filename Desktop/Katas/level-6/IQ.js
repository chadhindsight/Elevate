// Which number in the list is only odd or the only even number

function iqTest(numbers) {
    let str = numbers.split(' ').map(x => parseInt(x))

    // run two filters to check if even or odd
    let oddArray = []
    let evenArray = []

    let even = str.filter(x => x % 2 === 0)
    evenArray.push(even)
    let odd = str.filter(x => x % 2 !== 0)
    oddArray.push(odd)
    // +1 because the list is not zero indexed
    return odd.length > even.length ? str.indexOf(even[0]) + 1 : str.indexOf(odd[0]) + 1
    console.log(str.indexOf(odd[0]) + 1)
}