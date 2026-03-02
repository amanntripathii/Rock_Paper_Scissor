const winSound = new Audio("./audio/meow.mp3");
const loseSound = new Audio("./audio/ghop.mp3");

let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userSc = document.querySelector("#User");
const compSc = document.querySelector("#Computer");

getComputerChoice = () => {
    const computerChoices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomIndex];
};

const drawGame = () => {
    console.log("It's a draw!");
    msg.innerText = "It's a draw!";
    msg.style.backgroundColor = "#333";
};

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        console.log("You Win , bete moj krdi");
        msg.innerText = "You Win , meowww!!!";
        msg.style.backgroundColor = "green";
        userSc.innerText = `${userScore}`;

        winSound.currentTime = 0;
        winSound.play();
    }else{
        computerScore++;
        console.log("You Lose , ghop ghop ghop");
        msg.innerText = "You Lose , ghop ghop ghop!!!";
        msg.style.backgroundColor = "red";
        compSc.innerText = `${computerScore}`;

        loseSound.currentTime = 0;
        loseSound.play();
    }
};

const playGame = (userChoice) => {
    console.log(`User choice: ${userChoice}`);
    const computerChoice = getComputerChoice();
    console.log(`Computer choice: ${computerChoice}`);

    if(userChoice === computerChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = computerChoice === "scissors" ? false : true;
        }else{
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});