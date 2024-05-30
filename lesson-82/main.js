function greeting(name = 'Avgan') {
    return `Hello ${name}`
}

const result = greeting()
console.log(result)
// =========================================================================
const numbers = [1, 3, 7, 12, 22, 228, 1337, 1488]
const numbers2 = []

function checkforNumbersAbove10(array, item) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
            numbers2.push(numbers[i])
        }
    }
    return `${numbers2}`
}
console.log(checkforNumbersAbove10(numbers2, 10))