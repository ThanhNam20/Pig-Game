var scores, roundScore, activePlayer, gamePlaying;

 init();
// document.querySelector('#current-' + activePlayer ).textContent = dice; // doan #current- +activePlayer la kiem trs xem current nao duoc chon current-0 hay current-1 
setTimeout(updateName, 1000);


document.querySelector('.btn-roll').addEventListener('click', () => {
    // random number
    var dice = Math.floor(Math.random() * 6) + 1;
    //show the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = "dice-" + dice + '.png';
    //update the score if its not 1
    if (dice != 1) {
        //adding score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //next player
        // if (activePlayer === 0) {
        //     activePlayer = 1;
        // } else {
        //     activePlayer = 0;
        // }
        document.querySelector('#score-' + activePlayer).textContent = "0";
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', () => {
    //Adding current score to Global score
    scores[activePlayer] += roundScore;
    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
   
    var input = document.querySelector('.final-score').value;
    var winningScore
    // undefine 0 null..... is no eccept
    if (input) {
        winningScore = input;
    } else {
        winningScore = 100;
    }

    // Check if the player won the game
    if (scores[activePlayer] >= winningScore) {
        Swal.fire({
            title: 'YOU WIN!',
            width: 600,
            padding: '3em',
            background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
            backdrop: `rgba(0,0,123,0.4) url("https://sweetalert2.github.io/images/nyan-cat.gif")left top no-repeat`
        })
        init();
    } else {
        nextPlayer();
    }
})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // cau truc rut gon cua if else
    roundScore = 0;
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

 function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.dice').style.display = "none";
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

}

document.querySelector('.btn-new').addEventListener('click', ()=> {
    init();
})

 async function updateName() {
    const { value: text } = await Swal.fire({
        title: 'Enter your name',
        input: 'text',
        inputPlaceholder: 'Enter your name',
        inputAttributes: {
            maxlength: 20,
            autocapitalize: 'off',
            autocorrect: 'off'
        }
    })
    if (text) {
        document.querySelector('#name-0').textContent = text;
    } else {
        document.querySelector('#name-0').textContent = 'Stranger';
    }

}