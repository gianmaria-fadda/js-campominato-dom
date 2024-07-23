const cells = 100;
console.log('cells', cells, typeof cells);

const gridContainer = document.getElementById('grid-container');
const playButton = document.getElementById('play-button');
const diffSelect = document.getElementById('difficulty');

playButton.addEventListener('click', function () {
    gridContainer.innerHTML = '';

    let cells;

    console.log(diffSelect.value);

    if (diffSelect.value == '1') {
        cells = 100;
    } else if (diffSelect.value == '2') {
        cells = 81;
    } else if (diffSelect.value == '3') {
        cells = 49;
    }

    for (let i = 0; i < cells; i++) {
        const newCell = document.createElement('div');
        newCell.innerHTML = i + 1;

        newCell.addEventListener('click', function () {
            newCell.classList.toggle('color-light-coral');

            console.log(newCell.textContent);
        });

        gridContainer.append(newCell);
    }
});