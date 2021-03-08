const drink = { color: "brown", carbonated: true, sugar: 35 }


// Type alias
type Drink = [string, boolean, number]

// A tuple tells ts the specific order of types we expect
const pepsi: Drink = ["brown", true, 35]
const sprite: Drink = ["clear", true, 40]
const tea: Drink = ["brown", true, 0]

const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsepower: 400,
    weight: 3354
};