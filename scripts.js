const gridContainer = document.querySelector('.grid-container');


let cellCount = 2304; // cell count aka grid size X by X

var slider = document.getElementById("sizeSlider");
var output = document.getElementById("size-value");

output.innerHTML = slider.value; // Display the default slider value

slider.oninput = function() { // Updates slider value
    output.innerHTML = this.value;
    cellCount = this.value * this.value; // Updates cell count
    clearGrid(); // Deletes all cells if slider is moved
    gridColumnSize();
    createGrid();  // Creates grid with new value from slider

};

function createGrid() { // creates a grid with selected cell count
    for (let i = 0; i < cellCount; i++) {
        const createCells = document.createElement('div')
        createCells.classList.add('cell');
        gridContainer.appendChild(createCells);
    };

};

function gridColumnSize() {
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

gridColumnSize();
createGrid();

const cells = document.querySelectorAll('.cell');

 cells.forEach(cell => {  // Paints the cells with black on hover
    cell.addEventListener('mouseover', function() {
    cell.classList.add('cell-painted');
 });
});

function clearGrid() { // Deletes all generates cells on board - it is used only after changing grid size with slider
    cells.forEach(cell => {
        cell.remove();

    })
    console.log('removed')
};



