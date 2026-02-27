
let score = 0;
let gameInterval;

function startGame() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";
    
    score = 0;
    document.getElementById("score").innerText = score;

    // Simulação de pontuação automática
    gameInterval = setInterval(() => {
        score++;
        document.getElementById("score").innerText = score;
    }, 1000);
}

function goToMenu() {
    document.getElementById("game").style.display = "none";
    document.getElementById("menu").style.display = "block";

    clearInterval(gameInterval);
}