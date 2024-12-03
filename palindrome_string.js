const myString =prompt("Enter  the String");
let len = myString.length;
let newString = '';

for(let i = len-1 ; i>=0; i--){
    newString += myString.at(i);
}
if(newString == myString){
    console.log("String is Palindrome");
}
else{
    console.log("String is not Palindrome")
}
