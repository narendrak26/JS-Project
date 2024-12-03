console.log("Check the person is eligible for voting");

// let age =prompt("Enter your age");

// let result = (age>=18 && age<=50 ? "eligible for voting":"not eligible for voting");
// console.log(result);


let age = Number(prompt("Please enter your age"));
let final = (age>=18 && age<=50 ? ((age>=18 && age<=30) ? "you are strongly eligible for voting":"You can vote if you want")
: ((age>=51 && age<=60) ? "You can still vote with the additional checks and it will take some time for the checking"
: "you can not even enter the pooling booth")); 

// alert(final);
console.log(final);