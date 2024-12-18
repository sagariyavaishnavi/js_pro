const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const rollBtn = document.getElementById("roll-btn");

const inputSection = document.getElementById("input-section");
const gameSection = document.getElementById("game-section");

const player1ScoreEl = document.getElementById("player1-score");
const player2ScoreEl = document.getElementById("player2-score");

const player1Dice = document.getElementById("player1-dice");
const player2Dice = document.getElementById("player2-dice");

const roundInfo = document.getElementById("round-info");
const winnerEl = document.getElementById("winner");

let rounds;
let player1Name;
let player2Name;
let player1Score = 0;
let player2Score = 0;
let currentRound = 0;

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playRound() {
    if (currentRound >= rounds) {
        return; 
    }

    currentRound++;

    const roll1 = rollDice();
    const roll2 = rollDice();

    player1Dice.textContent = roll1;
    player2Dice.textContent = roll2;

    player1Score += roll1;
    player2Score += roll2;

    player1ScoreEl.textContent = player1Score;
    player2ScoreEl.textContent = player2Score;

    roundInfo.textContent = `Round ${currentRound} of ${rounds}`;

    if (currentRound === rounds) {
        declareWinner(); // Automatically declare winner after final round
        rollBtn.disabled = true; // Disable the Roll Dice button
    }
}

function declareWinner() {
    if (player1Score > player2Score) {
        winnerEl.textContent = `⭐🎊 Fantastic, ${player1Name}  You’ve won the game!  🎊⭐`;
    } else if (player2Score > player1Score) {
        winnerEl.textContent = `⭐🎊 Fantastic, ${player2Name}  ⭐🎊`;
    } else {
        winnerEl.textContent = "🤝 It's a Tie!";
    }
}

startBtn.addEventListener("click", () => {
    player1Name = document.getElementById("player1").value.trim();
    player2Name = document.getElementById("player2").value.trim();
    rounds = parseInt(document.getElementById("rounds").value);

    if (!player1Name || !player2Name || !rounds || rounds <= 0) {
        alert("Please enter valid player names and number of rounds.");
        return;
    }

    document.getElementById("player1-name").textContent = player1Name;
    document.getElementById("player2-name").textContent = player2Name;

    player1Score = 0;
    player2Score = 0;
    currentRound = 0;

    player1ScoreEl.textContent = "0";
    player2ScoreEl.textContent = "0";
    player1Dice.textContent = "🎲";
    player2Dice.textContent = "🎲";
    roundInfo.textContent = "Round 0 of " + rounds;

    inputSection.classList.add("hidden");
    gameSection.classList.remove("hidden");
    rollBtn.disabled = false;
    winnerEl.textContent = ""; // Clear previous winner
});

rollBtn.addEventListener("click", playRound);

resetBtn.addEventListener("click", () => {
    inputSection.classList.remove("hidden");
    gameSection.classList.add("hidden");
    document.getElementById("player1").value = "";
    document.getElementById("player2").value = "";
    document.getElementById("rounds").value = "";
    winnerEl.textContent = "";
});
