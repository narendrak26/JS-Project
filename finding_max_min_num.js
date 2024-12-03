let size = prompt("Enter size of array");
// let size = [1,2,3,4,5,6]
let arr = [];
for(let i=0; i<size; i++){
    arr[i] = Number(prompt("Enter value"))
console.log(arr);
};
let max = -Infinity;
let min = Infinity;
for(let i= 0; i<size; i++){
    if(arr[i]>max)
        max =arr[i];
    if(arr[i]<min)
        min=arr[i];
}
alert(`min = ${min} and max = ${max}`);