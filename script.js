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
    //compare players selection to computers selection
    //check for draw
    if(player == computer){
        //return outcome
        return "Draw! No Winner."
    }
    //check for player win
    else if((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper")){
        //return outcome
        return `Winner! ${player} beats ${computer}!`;
    }
        
    //check for player loss
    else if((computer == "rock" && player == "scissors") || (computer == "paper" && player == "rock") || (computer == "scissors" && player == "paper")){
        //return outcome
        return `You lose! ${computer} beats ${player}!`;
    }
}



console.log(playRound("rock", computerPlay()));
console.log(playRound("paper", computerPlay()));
console.log(playRound("scissors", computerPlay()));
//computerPlay();
