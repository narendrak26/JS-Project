let row = prompt("Enter the rows");
let str = '';
for(let i =1; i<=row; i++){
    for(let j=1;j<=row;j++){
        if((i==1)||(i==row)||(j==1)||(j==row))
            str+='*';
        else
        str+=' ';
    }
    str+='\n';
}
console.log(str);