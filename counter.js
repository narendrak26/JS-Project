let count = document.getElementById("count");
let btn1= document.getElementById("btn1");
let btn2= document.getElementById("btn2");
let btn3= document.getElementById("btn3");
let number = 0;
count.innerText = number;
btn1.addEventListener("click",function(){
    number < 20 && number++;
    count.innerText = number;
})
btn2.addEventListener("click",function(){
    number = 0 ;
    count.innerText = number;
})
btn3.addEventListener("click",function(){
    number > 0 && number--;
    count.innerText = number;
})

// function handleClick(){
//     const checked = document.getElementById('check').checked;
//     const rating = document.querySelector('input[name="rating"]:checked');
//     let feedback = 'Thank You for your feedback!';
//     if(rating){
//         feedback=`You have subscribed : ${rating.value}.`;
//     }
//     if(checked){
//         feedback+= `You rated: ${rating.value}. `;
//     }
//     else{
//         feedback+= 'You did not subscribe.';
//     }
//     document.getElementById('feedback').innerHTML = `<p>${feedback}</p>`;
//     }