const tela = document.getElementById("tela");
const square = document.getElementById("square");
const square1 = document.getElementById("square1");
const status1 = document.getElementById("status");
const FPS = 60;

let xPosition = Math.floor(500*Math.random());
let yPosition = Math.floor(500*Math.random());
let xPosition1 = Math.floor(500*Math.random());
let yPosition1 = Math.floor(500*Math.random());
let xSpeed = 1 * getNumber() *4;
let ySpeed = 2 * getNumber() *4;
let xSpeed1 = 1.1 * getNumber() *4;
let ySpeed1 = 1.9 * getNumber() *4;

let squareWidth = window.getComputedStyle(square);
squareWidth = squareWidth.getPropertyValue("width");
squareWidth = parseInt(squareWidth.split("px")[0]);

let squareHeight = window.getComputedStyle(square);
squareHeight = squareHeight.getPropertyValue("height"); 
squareHeight = parseInt(squareHeight.split("px")[0]);

let squareWidth1 = window.getComputedStyle(square1);
squareWidth1 = squareWidth1.getPropertyValue("width"); 
squareWidth1 = parseInt(squareWidth1.split("px")[0]);

let squareHeight1 = window.getComputedStyle(square1);
squareHeight1 = squareHeight1.getPropertyValue("height"); 
squareHeight1 = parseInt(squareHeight1.split("px")[0]);

function update(){
    square.style.left = xPosition + "px";
    square.style.top = yPosition + "px";
    square1.style.left = xPosition1 + "px";
    square1.style.top = yPosition1 + "px";
}

setInterval (()=>{

    if(xPosition + squareWidth >= 600 || xPosition<=0 || collision()){
        xSpeed = -xSpeed
        square.style.backgroundColor = randomColor();
    }
    if(yPosition + squareHeight >= 600 || yPosition<=0 || collision()){
        ySpeed = -ySpeed
        square.style.backgroundColor = randomColor();
    }

    if(xPosition1 + squareWidth1 >= 600 || xPosition1<=0 || collision()){
        xSpeed1 = -xSpeed1
        square1.style.backgroundColor = randomColor();
    }
    if(yPosition1 + squareHeight1 >= 600 || yPosition1<=0 || collision()){
        ySpeed1 = -ySpeed1
        square1.style.backgroundColor = randomColor();
    }

    xPosition += xSpeed;
    yPosition += ySpeed;
    xPosition1 += xSpeed1;
    yPosition1 += ySpeed1;
    update();
    collision();

} , 1000/FPS)


function randomColor(){
    let color = "#";
    color += Math.random().toString(16).slice(2,8).toUpperCase();
    return color;
}

function getNumber(){
    if(Math.random() > 0.5){
        return 1;
    }
    return -1;
}

function collision(){

    let aLeftOfb = (xPosition + squareWidth) > xPosition1;
    let aRightOfb = xPosition < (xPosition1 + squareWidth1);
    let aAboveb = (yPosition + squareHeight) > yPosition1;
    let aBelowb = yPosition < (yPosition1 + squareHeight1);

    status1.innerHTML = `aLeftOfb: ${!aLeftOfb} <br> aRightOfb: ${!aRightOfb} <br> aAboveb: ${!aAboveb} <br> aBelowb: ${!aBelowb}`
    
    return (aLeftOfb && aRightOfb && aAboveb && aBelowb);
}



let map = [

    [1, 2, 3, 1,1,2    ,2,3],
    [1, 2, 3, 1,1,2    ,2,3]

]

