let num  = Number(prompt("Enter a number"));
let temp = num;
let newNum = 0;
while(temp > 0){
    let digit = temp%10;
    newNum = newNum*10 + digit; 
    temp = Math.trunc(temp/10);

}
console.log(newNum);