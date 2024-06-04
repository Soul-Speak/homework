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

// =========================================================================

function calculator(firstNumber, secondNumber, operation) {
    
    if (operation === 'plus') {
        return firstNumber + secondNumber
    } else if (operation === 'minus') {
        return firstNumber - secondNumber
    } else if (operation === 'multiply') {
        return firstNumber * secondNumber
    } else if (operation === 'divide') {
        return firstNumber / secondNumber
    } else {
        return 'invalid (ti)'
    }
    
}

const result1 = calculator(55, 19, 'divide')

console.log(result1)
