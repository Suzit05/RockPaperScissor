console.log("its working");

const compScore = document.querySelector(".compScore");
const yourScore = document.querySelector(".yourScore");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const youPicked = document.querySelector(".youPicked");
const scoreComparing = document.querySelector(".scoreComparing");
const lowerContainer = document.querySelector(".lowerContainer");
const choiceImage = document.getElementById('choiceImage');
const pcImage = document.getElementById('pcImage');
const playAgianbtn = document.querySelector(".playAgianbtn");
const decisionText = document.getElementById('decisionText');
const rules = document.querySelector(".rules");
const rulesWindow = document.querySelector(".rulesWindow");
const cross = document.querySelector(".cross");
const nextbtn = document.querySelector(".nextbtn");
const mainContainer = document.querySelector(".mainContainer");
const hurrayContainer = document.querySelector(".hurrayContainer")
const playAgianSecbtn = document.querySelector(".playAgianSecbtn");

const choices = ["rock", "paper", "scissors"];
let cScore = 0;
let yScore = 0;

rules.addEventListener("click", () => {

    rulesWindow.style.visibility = "visible";
})
cross.addEventListener("click", () => {

    rulesWindow.style.visibility = "hidden";
})





let compGuess;
console.log(compGuess);

function pcImageChanger(compGuess) {
    if (compGuess == "rock") {
        pcImage.src = `./images/fist.png`;
    }
    else if (compGuess == "paper") {
        pcImage.src = `./images/hand-paper.png`;
    }
    else {
        pcImage.src = `./images/scissors.png`;
    }
}

playAgianbtn.addEventListener("click", () => {
    scoreComparing.style.visibility = "hidden";
    lowerContainer.style.visibility = "visible";
});

function compareChoices(compGuess, yourPicked) {

    if (compGuess === yourPicked) {
        console.log("It's a draw!");
        decisionText.textContent = "ITS A DRAW";

    } else if (
        (compGuess === "rock" && yourPicked === "scissors") ||
        (compGuess === "scissors" && yourPicked === "paper") ||
        (compGuess === "paper" && yourPicked === "rock")
    ) {
        console.log("Computer wins!");
        decisionText.textContent = "YOU LOST";
        cScore++;
        compScore.textContent = cScore;
        console.log(cScore);
    } else {
        console.log("You wINS");
        decisionText.textContent = "YOU WON";
        yScore++;
        yourScore.textContent = yScore;
        console.log(yScore);
    }
}



rock.addEventListener("click", () => {
    compGuess = choices[Math.floor(Math.random() * choices.length)];
    console.log("comp guess: " + compGuess);

    const yourPicked = "rock";
    choiceImage.src = `./images/fist.png`;
    pcImageChanger(compGuess);
    result = compareChoices(compGuess, yourPicked);
    lowerContainer.style.visibility = 'hidden';
    scoreComparing.style.visibility = 'visible';
});

paper.addEventListener("click", () => {
    compGuess = choices[Math.floor(Math.random() * choices.length)];
    console.log("comp guess: " + compGuess);

    const yourPicked = "paper";
    choiceImage.src = `./images/hand-paper.png`;
    pcImageChanger(compGuess); // **Moved up**
    result = compareChoices(compGuess, yourPicked);
    lowerContainer.style.visibility = 'hidden';
    scoreComparing.style.visibility = 'visible';
});

scissors.addEventListener("click", () => {
    compGuess = choices[Math.floor(Math.random() * choices.length)];
    console.log("comp guess: " + compGuess);

    const yourPicked = "scissors";
    choiceImage.src = `./images/scissors.png`;
    pcImageChanger(compGuess);
    result = compareChoices(compGuess, yourPicked);
    lowerContainer.style.visibility = 'hidden';
    scoreComparing.style.visibility = 'visible';
});


nextbtn.addEventListener("click", () => {
    console.log("next clicked");
    console.log("Current Scores - Computer: " + cScore + " You: " + yScore); // **Added**
    if (cScore < yScore) { // **Check logic for condition**
        console.log("You won, showing hurrayContainer"); // **Added**
        mainContainer.style.visibility = "hidden";
        scoreComparing.style.visibility = "hidden"
        hurrayContainer.style.visibility = "visible";


    } else {
        console.log("Condition not met, staying on mainContainer"); // **Added for debugging**

    }
});





playAgianSecbtn.addEventListener("click", () => {
    console.log("dusre play button m click ho gya hai")
    location.reload();
})