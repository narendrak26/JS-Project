
// const random=alert(Math.ceil(Math.random()*100));
// // console.log(random);
// let attempt = 0;
// let isDone = true;

// while(isDone){
//     let guess = prompt("Guess The Number"); 
//     guess = Number(guess);
//     attempt++;
//     if(guess === random){
//         console.log("Congrats you won",random);
//         isDone = fales;
//     }
//     else if(guess<random){
//         console.log("You guess a small number.try again")
//     }
//     else{
//         guess = prompt("Your guess was too long.try again-0")
//     }
// }


const minNum = 1;
const maxNum = 100;
// const answer = Math.floor(Math.random()*(maxNum-minNum +1))+minNum;
const answer = Math.ceil(Math.random()*maxNum);
let attempt = 0;
let guess;
let isDone = true;
while(isDone){
    guess = Number(prompt(`Guess a number between ${minNum} and ${maxNum}`));
    if(isNaN(guess)){
        alert("Please Enter a Valid Number");
    }
    else if((guess < minNum)||(guess > maxNum)){
        alert("Enter Number between 1 to 100");
    }
    else{
        attempt++;
        if(guess < answer){
            alert("Number Is Too Low!");
        }
        else if(guess > answer){
            alert("Number Is Too High!");
        }
        else{
            alert(`Congrats the answer was ${answer}.You took ${attempt} attempt`);
            isDone = false;
        }
       
    }
    
}


