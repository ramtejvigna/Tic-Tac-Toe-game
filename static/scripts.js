// static/scripts.js
let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

function makeMove(position) {
    fetch('/move', {
        method: 'POST',
        body: JSON.stringify({
            board: board,
            position: position,
            player: "X"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()).then(data => {
        board = data.board;
        updateBoard();
        if (data.status === 'win') {
            document.getElementById('message').innerText = `${data.winner} Wins!`;
            const foot = document.getElementById('foot');
            const play = document.createElement('a');
            play.setAttribute('href', '/board');
            play.setAttribute('class', 'play-again');
            play.innerText = "Play Again";

            foot.appendChild(play);
        } else if (data.status === 'draw') {
            document.getElementById('message').innerText = 'Draw!';
            const foot = document.getElementById('foot');
            const play = document.createElement('a');
            play.setAttribute('href', '/board');
            play.setAttribute('class', 'play-again');
            play.innerText = "Play Again";

            foot.appendChild(play);
        }
    });
}

function updateBoard() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(`cell-${i}`).innerText = board[i] === " " ? " " : board[i];
    }
}
