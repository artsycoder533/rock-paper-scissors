//variables
const newGame = document.querySelector('.newGame');
const rock = document.querySelector('.rock');
const rockIcon = document.querySelector('.playerMove .fa-hand-rock');
const paper = document.querySelector('.paper');
const paperIcon = document.querySelector('.playerMove .fa-hand-paper');
const scissors = document.querySelector('.scissors');
const scissorsIcon = document.querySelector('.playerMove .fa-hand-scissors');
const playerButtons = document.querySelector('.playerButtons');
//comuter variables
const rockIconComp = document.querySelector('.computerMove .fa-hand-rock');
const paperIconComp = document.querySelector('.computerMove .fa-hand-paper');
const scissorsIconComp = document.querySelector('.computerMove .fa-hand-scissors');
//player score
const playerScore = document.querySelector('.playerScore');
const playScoreDisplay = document.querySelector('#playerScore');
//computer score
const computerScore = document.querySelector('.computerScore');
const computerScoreDisplay = document.querySelector('#computerScore');
//game updates
const status = document.querySelector('.status');
//global variables
let playerWins = 0;
let computerWins = 0;
const wins = 5;
let name = "";

//event listeners
newGame.addEventListener('click', () => {
    playScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    name = prompt("Whats your name?");
    //wins = parseInt(prompt("What would you like to play to? [choose an integer between 1 & 10]"));
    const newh2 = document.querySelector('.score-p');
    newh2.textContent = `${name}`;
    const span = document.querySelector('span');
    span.textContent = `${wins}`;
    //starts game
    //make new game button invisible
    //document.querySelector(".newGame").disabled = true; 
    playerButtons.classList.remove('hide');
    newGame.classList.add('hide');
   // game(name, rounds);

});

rock.addEventListener('click', () => { 
    //display rock icon
    rockIcon.classList.remove('displayIcon');
    //turn off other icons
    paperIcon.classList.add('displayIcon');
    scissorsIcon.classList.add('displayIcon');
    //call playRound function with corresponding player selection as first parameter
    let w = playRound("rock", computerPlay());
    //alert(roundWinner.value);
    checkWinner(w);
});
paper.addEventListener('click', () => {
    paperIcon.classList.remove('displayIcon');
    //turn off other icons
    rockIcon.classList.add('displayIcon');
    scissorsIcon.classList.add('displayIcon');
    let y = playRound("paper", computerPlay());
    checkWinner(y);
});
scissors.addEventListener('click', () => {
    scissorsIcon.classList.remove('displayIcon');
    //turn off other icons
    rockIcon.classList.add('displayIcon');
    paperIcon.classList.add('displayIcon');
    let z = playRound("scissors", computerPlay());
    checkWinner(z);
});

//funtions
function showComputerPlay (move) {
    //rock
    if (move === "rock"){
        //turn on rock icon
        rockIconComp.classList.remove('displayIcon');
        //turn off other icons
        paperIconComp.classList.add('displayIcon');
        scissorsIconComp.classList.add('displayIcon');
    }
    //paper
    else if (move === "paper"){
        //turn on paper icon
        paperIconComp.classList.remove('displayIcon');
        //turn off other icons
        rockIconComp.classList.add('displayIcon');
        scissorsIconComp.classList.add('displayIcon');
    }
    //scissors
    else if (move === "scissors"){
        //turn on scissors icon
        scissorsIconComp.classList.remove('displayIcon');
        //turn off other icons
        rockIconComp.classList.add('displayIcon');
        paperIconComp.classList.add('displayIcon');
    }
    
}
//computer play
//randomly return either "rock", "paper" or "scissors"
function computerPlay() {
    const compPlay = ["rock", "paper", "scissors"];
    //use a random number generator to produce a number between 0 and 2
    let spot = Math.floor(Math.random() * 3);
    //display corresponding icon on screen, turn off others
    showComputerPlay(compPlay[spot]);
    //return the element at that randomly generated spot
    return compPlay[spot];
}

//play round
function playRound(player, computer) {
    //keeps track of who wins the round
    let roundWinner = "";
    //compare players selection to computers selection
    //check for draw
    if(player == computer){
        //return outcome
        roundWinner = "none";
        //return "Draw! No Winner."
        status.textContent = "Draw! No Winner.";
    }
    //check for player win
    else if((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper")){
        //return outcome
        roundWinner = "player";
        //playerScoreDisplay.textContent = "1";
        status.textContent = `Winner! ${player} beats ${computer}!`;
        
    }
        
    //check for player loss
    else if((computer == "rock" && player == "scissors") || (computer == "paper" && player == "rock") || (computer == "scissors" && player == "paper")){
        //return outcome
        roundWinner = "computer";
        //computerScoreDisplay.textContent = "1";
        status.textContent = `You lose! ${computer} beats ${player}!`;
    }
    return roundWinner;
}

function checkWinner(winner){
    //continue while neither players wins equals wins variable
    if (winner === "player"){
        playerWins++;
        playScoreDisplay.textContent = `${playerWins}`;
        //check for game won
        if(wins === playerWins){
            gameWon(winner);
        }
    }
    else if (winner === "computer"){
        computerWins++;
        computerScoreDisplay.textContent = `${computerWins}`;
        if(wins === computerWins){
            gameWon(winner);
        }
    }
}

function gameWon(gameWinner){
      if (gameWinner === "player"){
        status.textContent = `${name} is the winner!!!!!`;
        status.classList.add('winner');
        newGame.classList.remove('hide');
        
    }

    else if(gameWinner === "computer"){
        status.textContent = "GAME OVER :(";
        status.classList.add('winner');
        newGame.classList.remove('hide');
    }
    document.querySelector('.newGame').disabled = false; 
    playerButtons.classList.add('hide');
}

// //game function
// //takes in one parameter computers selection
// function game(playerName, numRounds) {
//     //initialize player score, computer score, and counter to 0
//     let playerWins = 0;
//     let computerWins = 0;
//     //let rounds = 5;
//     let winnerOfRound = "";
//     //calls playRound 5 times
    
//         //get player selection
//         //let playerMove = prompt("Enter rock, paper, or scissors");
//         //plays a round and keeps track of who won the round;
//         winnerOfRound = playRound(playerMove,computerPlay());
//         //keep track of wins
//         if (winnerOfRound == "player"){
//             playerWins++;
//         }
//         else if(winnerOfRound == "computer"){
//             computerWins++;
//         }
    
//     //whoever wins more games out of 5 wins
//     //returns overall winner
//     if (playerWins == computerWins){
//         return "Its a draw. There is no winner :(";
//     }
//     else if(playerWins > computerWins){
//         return "Player beat the computer!";
//     }
//     else {
//         return "Computer beat the player!";
//     }
// }

//game();


