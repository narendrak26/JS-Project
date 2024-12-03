let btn = document.getElementById("btn");
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let dice3 = document.getElementById("dice3");
btn.addEventListener("click",function(){

let num1 = Math.ceil(Math.random()*6);
let num2 = Math.ceil(Math.random()*6);
let num3 = Math.ceil(Math.random()*6);
// let final=console.log(`Dice1 = ${dice1},Dice2 = ${dice2},Dice3 = ${dice3},`);

let final1=`Dice1 = ${num1}`;
let final2=`Dice2 = ${num2}`;
let final3=`Dice3 = ${num3}`;

dice1.innerHTML = final1;
dice2.innerHTML = final2;
dice3.innerHTML = final3;

})