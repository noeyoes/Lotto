let generateNum = document.querySelector(".luckynum");
let button = document.querySelector("#box");

function generator() {
    const randomNum = Math.floor(Math.random() * 10 + 1);
    generateNum.innerHTML = randomNum;
}

button.addEventListener("click", generator);
