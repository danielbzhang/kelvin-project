// set constant kelvin
const kelvin = 293;
// set celsius
const celsius = kelvin - 273;
// calculate F
let fahrenheit = celsius * (9/5) + 32;
// round F
fahrenheit = fahrenheit.floor();

console.log(`The temperature is ${fahrenheit}.`);
