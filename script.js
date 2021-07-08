

//computer play
//randomly return either "rock", "paper" or "scissors"
function computerPlay() {
    //create an array with three strings, rock, paper, and scissors
    const compPlay = ["rock", "paper", "scissors"];
    //use a random number generator to produce a number between 0 and 2
    let spot = Math.floor(Math.random() * 3);
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
        let playerMove = prompt("Enter rock, paper, or scissors");
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

game();


