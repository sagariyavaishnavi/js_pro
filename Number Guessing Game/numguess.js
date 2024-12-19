function startGame() {
    let startRange = parseInt(window.prompt("Enter the starting range: "));
    let endRange = parseInt(window.prompt("Enter the ending range: "));

    if (isNaN(startRange) || isNaN(endRange) || startRange >= endRange) {
        window.alert("Invalid range. Please enter valid starting and ending numbers, with starting number less than ending number.");
        return;
    }

    const randomNum = Math.floor(Math.random() * (endRange - startRange + 1)) + startRange;
    let guess;

    window.alert(`Try to guess the number I'm thinking of, between ${startRange} and ${endRange}.`);

    do {
        guess = window.prompt("Enter your guess: ");
        guess = parseInt(guess);
        if (isNaN(guess)) {
            window.alert("Invalid input. Please enter a valid number.");
            continue;
        }

        if (guess < randomNum) {
            window.alert("Too low! Try again.👇");
        } else if (guess > randomNum) {
            window.alert("Too high! Try again.👆");
        } else {
            window.alert("Congratulations!🎉 You've guessed the number correctly!");
        }
    } while (guess !== randomNum);
}
