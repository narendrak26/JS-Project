// let marks = prompt("Please enter a Marks");
// // let marks = 100; 
// if (marks > 100 || marks < 0) {
//     console.log("Invalid Marks");
// } else if (marks >= 90) {
//     console.log("Grade A");
// } else if (marks >= 80) {
//     console.log("Grade B");
// } else if (marks >= 50) {
//     console.log("Grade C");
// } else if (marks >= 33) {
//     console.log("Grade D");
// } else {
//     console.log("Fail");
// }

let age = prompt("Please enter age")
if(age>=18){
    if(age<46){
        console.log("You are eligible for vote")
    }
    else{
        if(age<61)
        {
            console.log("You are not eligible for vote")
        }
        else{
            console.loglog("your are not eligible for voting beacuse your are not citizen of india ")
        }
        
    }
}
else{
    if(age>0){
        console.log("you are too young for voting in india")
    }
    else{
        console.log("you can vote for some premises")
    }
}