let isDone = true;
while(isDone){
    let startRange = Number(prompt("Enter the starting Range"));
    let endRange = Number(prompt("Enter the ending Range"));
    if(startRange == 0 || endRange == 0 || isNaN(startRange) || isNaN(endRange) || startRange>endRange)
    {
        alert("Enter a valid number and range");
    }
    else{
        isDone = false;
        let totalEvenNumbers = 0,totalOddNumbers = 0;
        for(let i = startRange; i<=endRange ; i++){
            if(i % 2 == 0){
                totalEvenNumbers++;
            }
            else{
                totalOddNumbers++;
            }
        }
        alert(`Total Even Numbers => ${totalEvenNumbers}, Total Odd Numbers => ${totalOddNumbers}`);
    }
}