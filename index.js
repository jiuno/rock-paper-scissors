function computerPlay() {
    index = Math.floor(Math.random()*choices.length);
    return choices[index];
};

function promptChoice() {
    choiceRaw = prompt("Choose rock, paper or scissors.");
    choice = choiceRaw.toLowerCase();
    if (choices.includes(choice)) {
        return choice
    } else {
        console.error("Check your spelling");   
    };
};

function playRound() {
    computerChoice = computerPlay();
    playerChoice = promptChoice(); 
    if (playerChoice == computerChoice ) {
        console.log(`It's a tie. Both selected ${playerChoice}`);
    } else {
        compareChoices(playerChoice,computerChoice);
    };

};

function compareChoices(choice1,choice2) {
    if (choice1=="rock") {
    choice2 == "paper" ? loseRound(): winRound();    
    } 
    else if (choice1 == "paper") {
    choice2 == "scissors" ? loseRound(): winRound();
    }
    else if (choice1 == "scissors") {
    choice2 == "rock"? loseRound(): winRound();
    };
};

function winRound() {
    playerScore++;
    console.log("You win");
    
};

function loseRound() {
    computerScore++;
    console.log("You lose");
    

    
};






function game() {
    choices = ["rock","paper","scissors"];
    playerScore = 0;
    computerScore = 0

    for (let i = 0; i < 5; i++) {
        playRound();
        console.log(`Score: You: ${playerScore} PC: ${computerScore}`);
    };
    if (playerScore > computerScore) {
        console.log("YOU WIN!! :)")
    } else {
        console.log("YOU LOSE! :(")
        
    }
    
}
