let size = prompt("Enter size of array");
let arr = [];
for(let i=0; i<size; i++){
    arr[i] = Number(prompt("Enter value"))
};
let sum = 0;
// for (const value of arr) {
//     if(!isNaN(value) && !Math.sign(value == 0) && !Math.sign(value ==-1)){
//         sum+= value;
//     }

// if(isNaN(value)){

// }
// else if(value < 1){

// }
// else{
//     sum+=value;
// }
    
// }
// console.log(sum);

arr.forEach((value)=>{
    // if(!isNaN(value) && !Math.sign(value == 0) && !Math.sign(value ==-1)){
    //     sum+= value;
    // }
    if(isNaN(value)){

}
else if(value < 1){

}
else{
    sum+=value;
}
    
}
);
console.log(sum);


