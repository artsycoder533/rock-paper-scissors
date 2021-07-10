Introduction
    -play game button makes modal appear
    -Allow player to change their name
        -Update h2 with name of player instead of Player
    -Allow player to reset what score they play to
        -Allow span with new number

Game
    -Once game play is pressed, turn on event listeners to player buttons
    -gray out play game button??
    -player selects a move
        -playRound function is called
    
            
Play Round
    -keep track of players scores
    -players selection is passed as parameter according to what button they pressed
            -change the visibility of the icon corresponding to the button pressed to visible so the player can see their move.
            -get computers move
                -change the visibililty of the icon corresponding to the computers selection
            -determine winner of round
            -update score of whoever won the round
            -display winning vs losing move
    -    

Game Won
    -first player to win 5 rounds wins
        -display winner
        -add game over modal? if player lost
        -add game winner modal if player wins