let num1 = "0";
let num2 = "0";
let temp;
let time = 0;

let tiles = document.querySelectorAll(".tile, .CC, img, .Enter, .zero, .one, .op")

tiles.forEach(tile =>  {
    tile.addEventListener("mousedown", () => {
        tile.style.backgroundColor = "red"
    }) 

    tile.addEventListener("mouseup", () => {
        tile.style.backgroundColor = "rgb(255, 153, 0)";
    })
})


//functions for when the operation happens 
let sum = (num1,num2) => {return (num1+num2)}
let difference = (num1,num2) => {return (num1-num2)}
let product = (num1,num2) => {return (num1*num2)}
let quotient = (num1,num2) => {return (num1/num2)}

let operate = (num1, num2, operator) => {

    if (operator == "+") {sum(num1, num2)}
    else if (operator == "-") {difference(num1, num2)}
    else if (operator == "*") {product(num1, num2)}
    else if (operator == "/") {quotient(num1, num2)}
}

//Code for displaying the numbers on the screen 
let screen = document.querySelector(".Number")
let numbers = document.querySelectorAll(".tile")
let ops = document.querySelectorAll(".op")
let Clear = document.querySelector(".CC")


//The Code for assigning values to num1 and num2 
numbers.forEach(number => {
    number.addEventListener("click", () => {
    if (time == 0) {
    screen.textContent += number.textContent.trim();
    screen.style.color = "white"
    num1 += (number.textContent);
    console.log(parseInt(num1.replace(/\s/g, "")))
    
}
    else if (time == 1) {
    screen.textContent += number.textContent.trim();
    screen.style.color = "white"
    num2 += number.textContent;
    console.log(parseInt(num2.replace(/\s/g, "")))
    }
})})


ops.forEach(op => {
    if (time < 1) {
    op.addEventListener("click", () => {
    screen.textContent += op.textContent;
    screen.style.color = "white"
    time += 1;
    })}})

Clear.addEventListener("click", () => {
screen.textContent = "" 
})







