console.log("Temperature Printing ");
// let tem = prompt("Give temperature in celcius");
// let feh = tem*9/5+32;
// console.log(feh);

let feh = prompt("Enter temperature in Fahrenheit");
let temCel = (feh - 32) * 5/9;
console.log(`Temperature in Celsius ${temCel}`);

let cel = prompt("Enter temperature in Celsius");
let temFeh = cel * 9/5 + 32;
console.log(`Temperature in Fahrenheit ${temFeh}`);