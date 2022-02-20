choices = ["rock","paper","scissors"]

function computerPlay() {
    index = Math.floor(Math.random()*choices.length);
    return choices[index];
};

function playerChoice() {
    
}

function playRound() {
    computerChoice = computerPlay();
    playerChoice = playerChoice();
    score = 0
    if (playerChoice == computerChoice ) {
        console.log(`It's a tie. Both selected ${playerChoice}`);
    } else {
        choiceComparisor(playerChoice,computerChoice);
    };

};

function winRound() {
    score++;
    console.log("You win");
    
};

function loseRound() {
    score--;
    console.log("You lose");
    
};



function choiceComparisor(choice1,choice2) {
    score = 0
    if (choice1=="rock") {
    choice2 == "paper" ? loseRound(): winRound();    
    } 
    else if (choice1 == "paper") {
    choice2 == "scissors" ? loseRound(): winRound();
    }
    else if (choice1 == "scissors") {
    choice2 == "rock"? loseRound(): winRound();
    };
    console.log(score);
}




