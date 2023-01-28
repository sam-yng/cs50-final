let whitePieces = document.querySelectorAll('.whitePiece')
let blackPieces = document.querySelectorAll('.blackPiece')
const color = turn == 'white' ? whitePieces : blackPieces;

const toggle = () => {
    if (turn == 'white') {
        document.querySelectorAll('.whitePiece').forEach(item => {
            item.addEventListener('click', event => {
                unToggle()
                removeMove()
                item.classList.add('toggled')
                toggleMove()
                allowMove()
                item.removeEventListener('click', event)
            })
        })
    } else if (turn == 'black') {
        document.querySelectorAll('.blackPiece').forEach(item => {
            item.addEventListener('click', event => {
                unToggle()
                removeMove()
                item.classList.add('toggled')
                toggleMove()
                allowMove()
                item.removeEventListener('click', event)
            })
        })
    }
};

const unToggle = () => {
    document.querySelectorAll('.toggled').forEach(item => {
        item.classList.remove('toggled');
    })
};

setInterval(toggle, 1100)

const toggleMove = () => {
    if (turn == 'white') {
        document.querySelectorAll('.whitePiece').forEach(item => {
            if (item.classList.contains('toggled')) {
                let poz = parseInt(item.id);
                poz += 10;
                let newPoz = poz.toString()
                let block = document.getElementById(newPoz)
                block.classList.add('move')
            }
        })
    } else if (turn == 'black') {
        document.querySelectorAll('.blackPiece').forEach(item => {
            if (item.classList.contains('toggled')) {
                let poz = parseInt(item.id);
                poz -= 10;
                let newPoz = poz.toString()
                let block = document.getElementById(newPoz)
                block.classList.add('move')
            }
        })
    }
};

const removeMove = () => {
    document.querySelectorAll('.move').forEach(item => {
        item.classList.remove('move');
    })
}

const allowMove = () => {
    let newElem = document.querySelector('.move')
    let oldElem = document.querySelector('.toggled').innerHTML

    newElem.addEventListener('click', function() {
        newElem.innerHTML = oldElem;
        document.querySelector('.toggled').innerHTML = '';
        document.querySelector('.toggled').classList.remove('toggled');
        newElem.classList.remove('move');
        turnChange();
        wCheck();
        bCheck();
    })
};