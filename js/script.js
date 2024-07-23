const gridContainer = document.getElementById('grid-container');
const playButton = document.getElementById('play-button');
const diffSelect = document.getElementById('difficulty');

playButton.addEventListener('click', function () {
    gridContainer.innerHTML = '';

    let cells;
    if (diffSelect.value == '1') {
        cells = 100;
    } else if (diffSelect.value == '2') {
        cells = 81;
    } else if (diffSelect.value == '3') {
        cells = 49;
    }

    const bombs = generateBombs(cells);
    console.log('Bombs:', bombs);

    let score = 0;

    for (let i = 0; i < cells; i++) {
        const newCell = document.createElement('div');
        newCell.innerHTML = i + 1;

        if (cells == 100) {
            newCell.classList.add('easy');
        }
        else if (cells == 81) {
            newCell.classList.add('medium');
        }
        else if (cells == 49) {
            newCell.classList.add('hard');
        }

        newCell.addEventListener('click', function () {
            if (bombs.includes(parseInt(newCell.textContent))) {
                newCell.classList.add('color-light-coral');
                alert(`Hai persooo! Il tuo punteggio è di ${score}.`);
                gridContainer.innerHTML = '';
            } else {
                newCell.classList.add('color-blue');
                score++;
                if (score === cells - 16) {
                    alert(`Hai vintooo! Il tuo punteggio è di ${score}.`);
                    gridContainer.innerHTML = '';
                }
            }
        });

        gridContainer.append(newCell);
    }
});

function generateBombs(maxCells) {
    const bombArray = [];
    while (bombArray.length < 16) {
        const randomNum = Math.floor(Math.random() * maxCells) + 1;
        if (!bombArray.includes(randomNum)) {
            bombArray.push(randomNum);
        }
    }
    return bombArray;
}