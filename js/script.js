const cells = 100;
console.log('cells', cells, typeof cells);

const gridContainer = document.getElementById('grid-container');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', function () {
    gridContainer.innerHTML = '';

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