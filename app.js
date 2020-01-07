var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
// document.querySelector('#current-' + activePlayer ).textContent = dice; // doan #current- +activePlayer la kiem trs xem current nao duoc chon current-0 hay current-1 
document.querySelector('.dice').style.display = "none";

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', () => {
    // random number
    var dice = Math.floor(Math.random() * 6) + 1;
    //show the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = "dice-" + dice + '.png';
    //update the score if its not 1
})

