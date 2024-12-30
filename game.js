let humanScore = 0;
let computerScore = 0;

function getComputerChoice() 
{
    let random = Math.floor(Math.random() * 3);
    let compChoice = null;

    if (random === 0)
    {
        compChoice = "rock";
    } 
    else if (random === 1) 
    {
        compChoice = "paper";
    } 
    else 
    {
        compChoice = "scissors";
    }

    return compChoice;
}

function getHumanChoice() 
{
    let humanChoice = null;
    let isValid = false;

    while(!isValid) 
    {
        humanChoice = prompt("Choose \'rock\' \'paper\' or \'scissors\'", "");

        if (humanChoice.toLowerCase() === "rock" || humanChoice.toLowerCase() === "scissors" || humanChoice.toLowerCase() === "paper") 
        {
            isValid = true;
        } 
        else 
        {
            alert("Wrong input! Try again");
        }
    }

    return humanChoice.toLowerCase();
}

function showScore() {
    console.log(`Player score: 
        Computer - ${computerScore}
        Player - ${humanScore}`);
}

function playRound() 
{
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === "rock") 
    {
        if (computerChoice === "rock")
        {
            console.log("Seems like a draw!");
        } 
        else if (computerChoice === "paper")    
        {
            ++computerScore;
            console.log("Paper beats rock! Computer won!");
        } 
        else 
        {
            ++humanScore;
            console.log("Rock beats scissors! Human won");
        }
    } 
    else if (humanChoice === "paper") 
    {
        if (computerChoice === "rock")
        {
            ++humanScore;
            console.log("Paper beats rock! Human won!");
        } 
        else if (computerChoice === "paper") 
        {
            console.log("Seems like a draw!");
        } 
        else 
        {
            ++computerScore;
            console.log("Scissors beat paper! Computer won");
        }
    }
    else 
    {
        if (computerChoice === "rock")
        {
            ++computerScore;
            console.log("Rock beats scissors! Computer won!");
        } 
        else if (computerChoice === "paper") 
        {
            ++humanScore;
            console.log("Scissors beat paper! Human won");
        } 
        else 
        {
            console.log("Seems like a draw!");
        }
    }

    showScore();
}

function playGame() {
    for (let i = 0; i < 5; ++i)
    {
        playRound();
    }

    if (humanScore > computerScore)
    {
        console.log("Congrats! You won!");
    }
    else 
    {
        console.log("Sad but true! Computer won!");
    }
}

showScore();
//playRound();
//playGame();