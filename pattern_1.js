// let row = prompt("Enter Row");
// let str = "";
// for(let i =1;i<=row;i++){
//     for(let j=row; j>i-1; j--){
//         str+= " * ";
      
//     }
//     str+= "\n";
//     for(let k = 1;k<=row;k++){
//         // str+= " * ";
//         console.log("*")

//     }
// }

// let row = prompt("Enter row");
// let str="";
// for(let i =1; i<=row; i++){
//     for(let k=1; k<=row-i; k++){
//         str+= " ";
//      }
//     for(let j =1; j<=i; j++){
//         str+='*';
//     }
 
//  str+="\n"
// }
// console.log(str);

// let row = prompt("Enter row");
// let str="";
// for(let i =1; i<=15; i++){
//     for(let k=1; k<=15-i; k++){
//         str+= " ";
//      }
//     for(let j =1; j<=i; j++){
//         str+='*';
//     }
 
//  str+="\n"
// }
// console.log(str);


//Reverse of Triangle

// let row = prompt("Enter a row");
// let str = "";
// for(let i =row; i>1; i--){
//     for(let k=1; k<=row-i; k++){
//         str+= " ";
//      }
//     for(let j =row; j>i; j--){
//         str+='*';
//     }
 
//  str+="\n"
// }
// console.log(str);


//Pramid Pattern
// let row = prompt("Enter a number for row");
// let str = "";
// for(let i=1;i<=row; i++){
//     for(let j =row; j>i; j--){
//      str+=" ";
//     }
//     // for(let k=1; k<=(2*i)-1; k++){  //for odd number f stars
//     for(let k=1; k<=i-1; k++){
      
//         str+= '* ';
//     }    
//     str+="\n";
// } 
// console.log(str);


                                                          //another way
// let str = "";
// for(let i = 0; i<5; i++){
//     for(let j = 0;j<=4+i; j++){
//         if(4-i<=j){
//             str+= '*';
//         }
//         else{ 
//         str+=" "; 
//         }
//     }
//     str+="\n";
// }
// console.log(str);

//Reverse of Pramid Pattern
// let row = prompt("Enter a number for row");
// let str = "";
// for(let i=row;i>=1; i--){
//     for(let j =row; j>=i; j--){
//         str+=" ";
//     }
//     for(let k=1; k<=((2*i)-1); k++){
//         str+= '* ';
//     }
//     str+="\n";
// } 
// console.log(str);

                                                            //Another way

// let str = "";
// for(let i = 5; i>=0; i--){
//     for(let j = 4+i;j>=0; j--){
//         if(4-i<=j){
//             str+= '*';
//         }
//         else{ 
//         str+=" "; 
//         }
//     }
//     str+="\n";
// }
// console.log(str);


//Hollow Square Pattern
// let row = prompt("Enter a row");
// let str = "";
// for(let i =1 ;i<=row; i++){
//     for(let k=1; k<=row)
// }






// let st = "";
// for(let i=0;i<=4;i++){
// for(let j=0; j<=9; j++){
//     if((j<=4-i)||(j>=5+i)){
//         st+= '*';
//     }
//     else{
//         st+= " ";
//     }
// }
// st+="\n";
// }
// console.log(st);


// let str = "";
// // let k =1;
// for(let i =0; i<=3; i++){
//     let k = 1;
//     for(let j=0; j<=3+i; j++){
//         if(3-i<=j){
//             str+=("%d",k);
//             if(j<3)
//                 k++;
//             else k--;
//         }
//         else str+= " ";
//     }
//     str+="\n";
// }
// console.log(str);