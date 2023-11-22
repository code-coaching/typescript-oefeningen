// Voeg de juiste types expliciet toe aan de variabelen hieronder
let person = {
    name: 'John',
    age: 42,
};

/**
 * Beide objecten stellen een dier voor.
 */
let duck = {
    name: 'Duck',
};

let dog = {
    name: 'Dog',
    age: 5,
}

/**
 * Dit is een array van dieren.
 * Je kan kiezen tussen Array<Interface> of Interface[]
 * Interface zal vervangen worden door het type van de objecten in de array.
 */
let animals = [duck, dog];

