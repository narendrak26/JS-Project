// Truthy or falsy values -->

// falsy value ->> -0,0,0n,"",'',``,null,undefined,NaN.
// truthy values ->> all the values except falsy values. , {},
// [];

let val1 = String(0);
let val2 = Number(0);
let val3 = Boolean(0);

console.log(`${val1} ${typeof val1}`); // "0" string
console.log(" ");
console.log(`${val2} ${typeof val2}`); // 0 number
console.log(`${val3} ${typeof val3}`); // true boolean
