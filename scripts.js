const gridContainer = document.querySelector('.grid-container');

let cellCount = 2304; // Cell count aka grid size

let slider = document.getElementById("sizeSlider");
let output = document.getElementById("size-value");

output.innerHTML = slider.value; // Display the default slider value

slider.oninput = function() { // Updates slider value
    output.innerHTML = this.value;
    cellCount = this.value * this.value; // Updates cell count
    generateNewGrid();
};

function createGrid() { // Creates a grid with selected cell count
    for (let i = 0; i < cellCount; i++) {
        const createCells = document.createElement('div')
        createCells.classList.add('cell');
        gridContainer.appendChild(createCells);
    };

};

function gridColumnSize() { // Changes CSS class for grid-container so that cells in grid are even size
    if (cellCount == 256) {
       gridContainer.classList.remove('grid32', 'grid48', 'grid64');
       gridContainer.classList.add('grid16');
   
    } else if (cellCount == 1024) {
       gridContainer.classList.remove('grid16', 'grid48', 'grid64');
       gridContainer.classList.add('grid32');
   
    } else if (cellCount == 2304) {
       gridContainer.classList.remove('grid32', 'grid16', 'grid64');
       gridContainer.classList.add('grid48');
   
    } else if (cellCount == 4096) {
       gridContainer.classList.remove('grid32', 'grid48', 'grid16');
       gridContainer.classList.add('grid64');
    };
};
gridColumnSize();   // executes both functions 
createGrid();   // to generate very first grid

function addSelectorToCell() { // Class selector for generated cells
    let cells = Array.from(document.getElementsByClassName('cell'));
    return cells;
};
let cellSelector = addSelectorToCell();

let color;

function paint() {
        if (color == 'black') {
        cellSelector.forEach(cell => {  // Paints the cells with black on hover
            cell.addEventListener('mouseover', function() {
            cell.style.backgroundColor = 'black';
        });
    });
    } else if (color == 'random') {
        cellSelector.forEach(cell => {  // Paints the cells with random color on hover
            cell.addEventListener('mouseover', function() {
                const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 
                let hex = '#';
            
                for (let i = 0; i < 6; i++) {
                    const index = Math.floor(Math.random() * hexValues.length)
                    hex += hexValues[index];
                }
                cell.style.backgroundColor = hex;
            });
    });
    };
};
paint();

function clearGrid() { // Deletes all generates cells on board
    cellSelector.forEach(cell => {
        cell.remove();
    })
};

function generateNewGrid() { 
    clearGrid();
    createGrid();
    gridColumnSize();
    cellSelector = addSelectorToCell();
    paint();
}

// Buttons \/

const blackColorButton = document.getElementById('black-color-button');
const randomColorButton = document.getElementById('random-color-button');

blackColorButton.addEventListener('click', () => {
    color = 'black';
    paint();
});

randomColorButton.addEventListener('click', () => {
    color = 'random';
    paint();
});

const eraser = document.getElementById('eraser');

eraser.addEventListener('click', function() { // Clears cells on hover aka eraser
    cellSelector.forEach(cell => { 
        cell.addEventListener('mouseover', function() {
        cell.style.backgroundColor = '';
    });
});
})



const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function() { // Clears the board from painted cells
    cellSelector.forEach(cell => {
        cell.style.backgroundColor = '';
    });
});

const hideButton = document.getElementById('hide');
let hideButtonClicked = 0;

hideButton.addEventListener('click', function() { // Hides the grid
    hideButtonClicked++;

    cellSelector.forEach(cell => { 
        if (hideButtonClicked % 2 == 0) {
            cell.classList.remove('cell-borderless');
            cell.classList.add('cell');

        } else {
            cell.classList.remove('cell');
            cell.classList.add('cell-borderless');
        };
})
});

