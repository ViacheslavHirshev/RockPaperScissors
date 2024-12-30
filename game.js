let humanScore = 0;
let computerScore = 0;
let humanChoice = null;

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

function addEvents()
{
    let contolButtons = document.querySelector(".control-buttons");
    contolButtons.addEventListener('click', function(event) {
        let target = event.target.closest("button");
        if(!target)
            return;

        humanChoice = target.innerText.toLowerCase();
    });

    contolButtons.addEventListener('click', function(event) {
        let target = event.target.closest("button");
        if(!target)
            return;

        playRound();
    });

    contolButtons.addEventListener('click', function(event) {
        let target = event.target.closest("button");
        if(!target)
            return;

        checkWinCondition();
    });
}

function showScore() 
{
    log.value += `Player score: 
        Computer - ${computerScore}
        Player - ${humanScore}\n\n`;
}

function playRound() 
{
    let computerChoice = getComputerChoice();

    log.value += `You chose: ${humanChoice}\n`;
    log.value += `Computer chose: ${computerChoice}\n`;

    if (humanChoice === "rock") 
    {
        if (computerChoice === "rock")
        {
            log.value += "Seems like a draw!\n\n";
        } 
        else if (computerChoice === "paper")    
        {
            ++computerScore;
            log.value += "Paper beats rock! Computer won!\n\n";
        } 
        else 
        {
            ++humanScore;
            log.value += "Rock beats scissors! Human won\n\n";
        }
    } 
    else if (humanChoice === "paper") 
    {
        if (computerChoice === "rock")
        {
            ++humanScore;
            log.value += "Paper beats rock! Human won!\n\n";
        } 
        else if (computerChoice === "paper") 
        {
            log.value += "Seems like a draw!\n\n";
        } 
        else 
        {
            ++computerScore;
            log.value += "Scissors beat paper! Computer won!\n\n";
        }
    }
    else 
    {
        if (computerChoice === "rock")
        {
            ++computerScore;
            log.value += "Rock beats scissors! Computer won!\n\n";
        } 
        else if (computerChoice === "paper") 
        {
            ++humanScore;
            log.value += "Scissors beat paper! Human won!\n\n";
        } 
        else 
        {
            log.value += "Seems like a draw!\n\n";
        }
    }

    showScore();
}

function checkWinCondition() {
    if (computerScore === 5)
    {
        log.value += "The winner is - Computer! \n\nTry again!!!\n\n";
        humanScore = 0;
        computerScore = 0;
        showScore();
    }

    if (humanScore === 5)
    {
        log.value += "The winner is - Human! \n\nTry again!!!\n\n";
        humanScore = 0;
        computerScore = 0;
        showScore();
    }
}

showScore();
addEvents();
