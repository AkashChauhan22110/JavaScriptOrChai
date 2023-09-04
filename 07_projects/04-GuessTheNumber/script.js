// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guess-input').value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        document.getElementById('result').textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        document.getElementById('result').style.color = 'green';
        document.getElementById('guess-input').setAttribute('disabled', 'true');
    } else if (guess < randomNumber) {
        document.getElementById('result').textContent = 'Try a higher number.';
        document.getElementById('result').style.color = 'red';
    } else {
        document.getElementById('result').textContent = 'Try a lower number.';
        document.getElementById('result').style.color = 'red';
    }

    document.getElementById('guess-input').value = '';
}