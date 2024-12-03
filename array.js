// let a = 4;
// let b = 6;
// let temp = a;
// a=b;
// b=temp;
// Swapping of values using third variable
// console.log(`the values of a is ${a} and value of b is ${b}`);

// Swapping of values without using third variable
// a= a+b;
// b=a-b;
// a=a-b;
// console.log(`the values of a is ${a} and value of b is ${b}`);

// let arr = ["narendra","vineet","abhinav","jettu","abhishek"]
// console.log(arr.toString());
// console.log(arr.join("  "));
// console.log(arr.at());
// console.log(arr.push("Manu"));
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// console.log(arr.unshift("Manu"));
// console.log(arr);
// console.log(arr.slice(0,3));
// console.log(arr);
// console.log(arr.splice(1 ,4,"Manu"));
// console.log(arr);
// console.log(arr.indexOf("Manu"));
// console.log(arr);
// console.log(arr.length);
// console.log(arr);
// console.log(arr.toString());
// console.log(arr.toString());

let arr1 =[12,3,4,5,99,100];
let reducedArray = arr1.reduce(function(accumulator,nextValue){
    return accumulator+nextValue;
});
console.log(reducedArray);
