//variables
const startGame = document.querySelector('.startGame');
const rock = document.querySelector('.rock');
const rockIcon = document.querySelector('.playerMove .fa-hand-rock');
const paper = document.querySelector('.paper');
const paperIcon = document.querySelector('.playerMove .fa-hand-paper');
const scissors = document.querySelector('.scissors');
const scissorsIcon = document.querySelector('.playerMove .fa-hand-scissors');
//comuter variables
const rockIconComp = document.querySelector('.computerMove .fa-hand-rock');
const paperIconComp = document.querySelector('.computerMove .fa-hand-paper');
const scissorsIconComp = document.querySelector('.computerMove .fa-hand-scissors');
const player = document.getElementsByClassName('.playerScore');
//player score
const playScoreDisplay = document.getElementById('#playerScore');
//computer score

//event listeners
startGame.addEventListener('click', () => {
    let name = prompt("Whats your name?");
    const newh2 = document.querySelector('.score-p');
    const x = document.querySelector('.playerScore');
    newh2.textContent = `${name}`;
    x.appendChild(newh2);
});
rock.addEventListener('click', () => {
    //display rock icon
    rockIcon.classList.remove('displayIcon');
    //turn off other icons
    paperIcon.classList.add('displayIcon');
    scissorsIcon.classList.add('displayIcon');
    //call playRound function with corresponding player selection as first parameter
    playRound(rock, computerPlay());
});
paper.addEventListener('click', () => {
    paperIcon.classList.remove('displayIcon');
    //turn off other icons
    rockIcon.classList.add('displayIcon');
    scissorsIcon.classList.add('displayIcon');
    playRound(paper, computerPlay());
});
scissors.addEventListener('click', () => {
    scissorsIcon.classList.remove('displayIcon');
    //turn off other icons
    rockIcon.classList.add('displayIcon');
    paperIcon.classList.add('displayIcon');
    playRound(scissors, computerPlay());
});

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
    //create an array with three strings, rock, paper, and scissors
    const compPlay = ["rock", "paper", "scissors"];
    //use a random number generator to produce a number between 0 and 2
    let spot = Math.floor(Math.random() * 3);
    //display corresponding icon on screen, turn off others
    showComputerPlay(compPlay[spot]);
    //return the element at that randomly generated spot
    return compPlay[spot];
}

//play round
//take in two parameters, players selection and computers selection
function playRound(player, computer) {
    //keeps track of who wins the round
    let roundWinner = "";
    //compare players selection to computers selection
    //check for draw
    if(player == computer){
        //return outcome
        roundWinner = "none";
        //return "Draw! No Winner."
    }
    //check for player win
    else if((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper")){
        //return outcome
        roundWinner = "player";
        playerScoreDisplay.textContent = "1";
        player.appendChild(playerScoreDisplay);
        //return `Winner! ${player} beats ${computer}!`;
    }
        
    //check for player loss
    else if((computer == "rock" && player == "scissors") || (computer == "paper" && player == "rock") || (computer == "scissors" && player == "paper")){
        //return outcome
        roundWinner = "computer";
        //return `You lose! ${computer} beats ${player}!`;
    }
    return roundWinner;
}

//game function
//takes in one parameter computers selection
function game() {
    //initialize player score, computer score, and counter to 0
    let playerWins = 0;
    let computerWins = 0;
    let rounds = 5;
    let winnerOfRound = "";
    //calls playRound 5 times
    for(let i = 0; i < rounds; i++){
        //get player selection
        //let playerMove = prompt("Enter rock, paper, or scissors");
        //plays a round and keeps track of who won the round;
        winnerOfRound = playRound(playerMove,computerPlay());
        //keep track of wins
        if (winnerOfRound == "player"){
            playerWins++;
        }
        else if(winnerOfRound == "computer"){
            computerWins++;
        }
    }
    //whoever wins more games out of 5 wins
    //returns overall winner
    if (playerWins == computerWins){
        return "Its a draw. There is no winner :(";
    }
    else if(playerWins > computerWins){
        return "Player beat the computer!";
    }
    else {
        return "Computer beat the player!";
    }
}

//game();


