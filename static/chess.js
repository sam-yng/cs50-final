let turn = 'white';
let showTurn = document.getElementById('show-turn');

const turnChange = () => {
    if (turn == 'white') {
        turn = 'black';
        showTurn.innerHTML = 'Turn: black'
    } else {
        turn = 'white';
        showTurn.innerHTML = 'Turn: whit'
    }
};

