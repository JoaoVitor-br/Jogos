import {setCTP} from "/jogos/main.js"

let tempo = 0;
let gameInterval;
// function abertura() {
//     document.getElementById("menu").style.display = "none";
//     document.getElementById("abertura").style.display = "block";
//     document.querySelector("body").style.display = "none"
//     tempo = 0;
//     gameInterval = setInterval(() => {


//         tempo++;
//         document.getElementById("tempo").innerText = tempo;
//     }, 1000);


// }
console.log(tempo)

document.getElementById("goToMenu").addEventListener("click", goToMenu)
document.getElementById("startGame").addEventListener("click", startGame)

function startGame() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("win").style.display = "none";
    document.getElementById("win").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.querySelector("header").style.width = "0vw"
    document.querySelector("header").style.height = "0vh"

    setCTP()
    document.getElementById("tempo").innerText = tempo;

    // Simulação de pontuação automática
    gameInterval = setInterval(() => {
        tempo++;
        document.getElementById("tempo").innerText = tempo;
    }, 1000);
}

function goToMenu() {
    document.getElementById("game").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("win").style.display = "none";
    document.querySelector("header").style.width = "100vw"
    document.querySelector("header").style.height = "100vh"
    clearInterval(gameInterval);
}
