let marks = Number(prompt("Enter percentage"));
switch(true){
    case (marks>=90 && marks<=100):
        console.log("Grade A");
        break;
    case (marks>=80 && marks<90):
        console.log("Grade B");
        break;
    case (marks<33):
        console.log("Grade c");
        break;
    default:
        console.log("Marks does not matches");
}