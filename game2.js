let score = 0;
let highScore = 0;
let timeLeft = 10;
let timerInterval;
let gameStarted = false;

const box = document.getElementById('box');
const startBtn = document.getElementById('startBtn');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const highScoreDisplay = document.getElementById('highScore');

// Start game when "Start Game" button is clicked
startBtn.addEventListener('click', startGame);

// Clicking the box increases score
box.addEventListener('click', function () {
    if (gameStarted) {
        score++;
        scoreDisplay.textContent = score;
        moveBox();
    }
});

function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        score = 0;
        timeLeft = 10;
        scoreDisplay.textContent = score;
        timeDisplay.textContent = timeLeft;

        // Hide the start button and show the box
        startBtn.style.display = 'none';
        box.style.display = 'block';

        // Start the timer
        timerInterval = setInterval(updateTime, 1000);
    }
}

function updateTime() {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    // End the game when time is up
    if (timeLeft === 0) {
        endGame();
    }
}

function endGame() {
    clearInterval(timerInterval);
    gameStarted = false;

    // Hide the box and show the start button
    box.style.display = 'none';
    startBtn.style.display = 'block';

    // Update the high score if current score is greater
    if (score > highScore) {
        highScore = score;
        highScoreDisplay.textContent = highScore;
    }

    alert(`Time's up! Your score is: ${score}`);
}

// Function to move the box to a random position within the container
function moveBox() {
    const container = document.querySelector('.game-container');
    const containerRect = container.getBoundingClientRect();

    // Generate random positions within the container
    const newX = Math.random() * (containerRect.width - 50); // 50 is the width of the box
    const newY = Math.random() * (containerRect.height - 50); // 50 is the height of the box

    box.style.left = `${newX}px`;
    box.style.top = `${newY}px`;
}
