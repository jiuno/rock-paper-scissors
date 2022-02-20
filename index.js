choices = ["rock","paper","scissors"]
score = 0

function computerPlay() {
    index = Math.floor(Math.random()*choices.length);
    return choices[index];
};

function promptChoice() {
    choice = (prompt("Choose rock, paper or scissors.").toLowerCase());
    if (choices.includes(choice)) {
        return choice
    } else {
        console.log("Check your spelling")
    }

function playRound() {
    computerChoice = computerPlay();
    playerChoice = promptChoice(); //Replace for promptChoice
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




