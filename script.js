var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var randButtom = document.querySelector('.randomize')
var body = document.querySelector("body");
var css = document.querySelector("h3");

function addDemoFunction(){
    console.log("Do something");
}

function generateRandomHexColor(){
    const random = Math.floor(Math.random() * 16777215).toString(16);
    const paddedHex = random.padStart(6, '0');
    return `#${paddedHex}`
}
function generateRandomColorGradient(){
    color1.value = generateRandomHexColor();
    color2.value = generateRandomHexColor();
    setGradient()
}

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
randButtom.addEventListener('click',  generateRandomColorGradient)
setGradient()
