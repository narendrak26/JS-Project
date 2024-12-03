// console.log("Method 1");
// //
// console.log("Leap Year");
// let year = prompt("Enter Year of Your choice");
// if((year%4==0 && year%100!=0)){
//     console.log("Year is leap year");
// }
// else if(year%4==0 && year%100==0  && year%400==0){
//     console.log("Year is leap year");
// }
// else{
//     console.log("Year is not a leap year")
// }

// console.log("Method 2");
// //
// let div = document.getElementById("div");
// let years = prompt("Enter Year of Your choice");
// function leapYear(years){
// if(years%4==0){
//     if(years%100!=0)
//         return("Year is Leap Year");
//     else{
//         if(years%400==0)
//             return("Year is Leap Year");
//         else
//         return("Not an Leap Year")
//     }
// }
// else{
//     return("Year is Not a Leap Year");
// }
// };
// let check = leapYear(years);
// div.innerHTML=check;

//
console.log("Method 3");
let year = Number(prompt("Enter Year"));
function checkYear(year){
let result = '';
if(isNaN(year)){
    return "Please Enter a Valid Number"
}
else{
    if((year%4==0 && year%100 !=0) ||(year%4 == 0 && year%100==0 && year%400==0)){
        result = `${year} is a leap year`;
    }
    else{
        result =`${year} isn't a leap year`;
    }
    return result;
}
};
console.log(checkYear(year));

