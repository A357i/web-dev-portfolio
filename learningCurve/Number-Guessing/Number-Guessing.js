//  NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// console.log(answer);

let attemps = 0;
let guess;
let running = true; // WE EXIT THE GAME WHEN ITS OVER

while (running) {
    
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    // console.log(typeof guess, guess);

    if (isNaN(guess)) {
        window.alert("Please enter a valid number");
    }
    else if (guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number")
    }
    else {
        attemps++;
        if (guess < answer) {
            window.alert("TOO LOW! TRY AGAIN!")
        }
        else if (guess > answer) {
            window.alert("TOO HIGH! TRY AGAIN!");
        }
        else {
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attemps} attempts`);
            running = false;
        }
    }

    running = false ;
}
