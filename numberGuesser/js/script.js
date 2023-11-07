//get elements from the document
let guessBtn = document.getElementById('guessBtn');
let resetBtn = document.getElementById('resetBtn');
let verdict = document.getElementById('verdict');
let attempt = document.getElementById('attempt');

//numbers
let low = 10;
let high = 20;
let chances = 3;
let attempts = 0;
let randomNumber = Math.floor(Math.random() * (high - low + 1)) + low;


//function to check the guessed number
let checkGuess = (e) => {
    let userGuess = document.getElementById('guess').value;
    if (userGuess == '') {
        alert('Please enter a number!');
        return;
    }
    document.getElementById('guess').value = '';
    attempts++;
    attempt.innerHTML = `${attempts} \/ 3`;

    //console.log("User Input: " + userGuess+ "\n" + "Random Number: " + randomNumber);

    if (chances != 0){
        chances--;
        if (userGuess == randomNumber) {
            verdict.innerHTML = '<b>Congratulations You Win!</b> You guessed it right! <br><br>The number is ' + randomNumber;
            gameOver(e);
        } else if(userGuess > randomNumber) {
            verdict.innerHTML = 'Hint: Correct answer is smaller! You have ' + chances + ' chances left.';
        } else {
            verdict.innerHTML = 'Hint: Correct answer is greater! You have ' + chances + ' chances left.';
        }
        //console.log("\nChance Left:"+chances);
        if(chances == 0){
            verdict.innerHTML = '<b>You lose!</b> Game Over! No more chance left. <br><br> The number was ' + randomNumber + '. Click Reset to play again.';
            gameOver(e);
        }
    }
    else{
        verdict.innerHTML = '<b>You lose!</b> Game Over! No more chance left. <br><br> The number was ' + randomNumber + '. Click Reset to play again.';
        gameOver(e);
    }

    e.preventDefault();
}


let gameOver = (e) => {
    document.getElementById('guess').disabled = true;      
    document.getElementById('guessBtn').disabled = true;
    resetBtn.style.display = 'block'; 
    e.preventDefault();
}

let resetGame = (e) => {
    document.getElementById('guess').disabled = false;
    document.getElementById('guessBtn').disabled = false;
    document.getElementById('guess').value = '';
    chances = 3;
    randomNumber = Math.floor(Math.random() * (high - low + 1)) + low;
    resetBtn.style.display = 'none';
    verdict.innerHTML = '';
    attempt.innerHTML = `0 \/ 3`;
    attempts = 0;
    e.preventDefault();
}


//add event listeners
guessBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', resetGame);
