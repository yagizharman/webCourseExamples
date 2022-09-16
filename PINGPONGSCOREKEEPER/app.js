var scoreString = document.querySelector('.scoretext');
var score1 = document.querySelector('.player1')
var score2 = document.querySelector('.player2')
var button1 = document.querySelector(".button1")
var button2 = document.querySelector(".button2");
var buttonreset = document.querySelector(".resetbutton")
var playtovalue = document.querySelector('#playto');

button1.addEventListener('click', function () {
    score1.innerHTML = `${parseInt(score1.innerHTML) + 1}`;
    if (playtovalue.value === score1.innerHTML) {
        alert("Game is over. Player 1 won the game");
        resetScore();
    }
})
button2.addEventListener('click', function () {
    score2.innerHTML = `${parseInt(score2.innerHTML) + 1}`;
    if (playtovalue.value === score2.innerHTML) {
        alert("Game is over. Player 2 won the game");
        resetScore();
    }
})
buttonreset.addEventListener('click', function () {
    resetScore();
})
function resetScore() {
    score1.innerHTML = '0';
    score2.innerHTML = '0';
}

