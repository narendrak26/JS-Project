let btn = document.getElementById("btn");
let area = document.getElementById("area");
let input = document.getElementById("input");
btn.addEventListener("click",function(){
    let inputedValue = input.value;
    let generatedArea = (Math.PI)*Math.pow(inputedValue,2);
    area.innerHTML = `Calculated Area is ${generatedArea.toFixed(2)}cm<sup>2</sup>`
}) 