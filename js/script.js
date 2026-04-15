function getComputerChoice() {
    
    let computerChoice = Math.floor(Math.random() * 3);

    if(computerChoice === 0) {
        return "Rock";
    } else if(computerChoice === 1) {
        return "Paper";
    }  else {
        return "Scissor";
    }
}

function getHumanChoice() {
   let humanChoice = prompt('Select a choice: Rock, Paper or Scissor')
   return humanChoice;
}

//scores start
let humanScore = 0;
let computerScore = 0;

//playRound
function playRound(humanChoice,computerChoice){

    if(humanChoice === computerChoice){
        console.log(`Is tie both chose ${humanChoice}/${computerChoice}`)

    } else if(
       ( humanChoice === 'ROCK' && computerChoice === 'SCISSOR') ||
       (humanChoice === 'PAPER' && computerChoice === 'ROCK') ||
       (humanChoice === 'SCISSOR' && computerChoice === 'PAPER')
    ){
        console.log(`You Win ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`)

    }  else {
        console.log(`You Lose ${computerChoice} beats ${humanChoice}`);
        computerScore++
        console.log(`Computer Score: ${computerScore}\nHuman Score: ${humanScore}`)
    };
    
}

//playGame
function playGame() {
    
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice().toUpperCase();
        const computerSelection = getComputerChoice().toUpperCase();

        playRound(humanSelection, computerSelection) 
    }

    if(humanScore === computerScore) {
        console.log(`It's tie! Human ${humanScore} points - Computer ${computerScore} points`)
    }
    else if (humanScore > computerScore) {
        console.log(`You Win ${humanScore} points - Computer ${computerScore} points`)
    } else {
        console.log(`Computer Wins ${computerScore} points - Human ${humanScore} points`)
    }

}

playGame()

