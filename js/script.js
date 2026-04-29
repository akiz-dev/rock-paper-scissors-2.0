// computer choice
function getComputerChoice() {
    
    let computerChoice = Math.floor(Math.random() * 3);

    if(computerChoice === 0) {
        return "Rock";
    } else if(computerChoice === 1) {
        return "Paper";
    }  else {
        return "Scissors";
    }
}

// player select
const playerRock = document.querySelector("#rock");
const playerPaper = document.querySelector("#paper");
const playerScissors = document.querySelector("#scissors");

playerRock.addEventListener("click", () => {
    playRound('Rock', getComputerChoice());
});

playerPaper.addEventListener("click", () => {
    playRound('Paper', getComputerChoice());
});

playerScissors.addEventListener("click", () => {
    playRound('Scissors', getComputerChoice());
})

//scores start
let playerScore = 0;
let computerScore = 0;

//scores display
let playerScoreDisplay = document.querySelector("#playerScoreDisplay");
playerScoreDisplay.textContent += ' ' + playerScore;

let computerScoreDisplay = document.querySelector("#computerScoreDisplay");
computerScoreDisplay.textContent += ' ' + computerScore;

// show choices
const showChoices = document.querySelector(".show__choices");

//playRound
function playRound(playerSelect, computerSelect){
    console.log(playerSelect, computerSelect);

    if(playerSelect === computerSelect) {
        alert(`Empate! Ambos escolheram ${playerSelect}`);
    } else if(
        playerSelect === "Rock" && computerSelect === "Scissors" ||
        playerSelect === "Paper" && computerSelect === "Rock" ||
        playerSelect === "Scissors" && computerSelect === "Paper"
    ) {
        playerScore++;
        console.log(`Player wins ${playerScore} ${computerScore}`);
        playerScoreDisplay.textContent = 'Player ' + playerScore;

    } else {
        computerScore++;
        console.log(`Computer wins ${computerScore} ${playerScore}`);
        computerScoreDisplay.textContent = 'Computer ' + computerScore;
    };

    // show winner
    if (playerScore === 5 && playerScore > computerScore) {
        alert('player winner');
        resetGame()
    } else if(computerScore === 5 && computerScore > playerScore) {
        alert("computer winner");
        resetGame()
    };
};

// reset game
const btnResetGame = document.getElementById('btnReset');

btnResetGame.addEventListener('click', () => {
    resetGame()
});

function resetGame(){
    playerScore = 0;
    computerScore = 0;

    playerScoreDisplay.textContent = 'Player ' + playerScore;
    computerScoreDisplay.textContent = 'Computer ' + computerScore;
}
