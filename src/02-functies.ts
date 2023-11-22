// Voorzie een type voor alle parameters en voorzie een return type.

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2)); // 3

function concatenate(a, b) {
    return a + b;
}

console.log(concatenate('John', ' Duck')); // John Duck

function sumOfArray(numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

console.log(sumOfArray([1, 2, 3, 4, 5])); // 15

function printName(person) {
    console.log(person.name);
}