const canvas = document.getElementById('canvas');
const sizeSlider = document.getElementById('sizeSlider');
const resetBtn = document.getElementById('reset');
const size = 16;
createCanvas(size);

canvas.addEventListener('mouseover', (e) => {
    // prevent changing the bg color of the canvas if there is no cells
    if (!(e.target === canvas)) {
        e.target.style.backgroundColor = 'black';
    }
})

resetBtn.addEventListener('click', () => {
    const cells = canvas.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    })
})

sizeSlider.addEventListener('input', (e) => {
    value = e.target.value;
    createCanvas(value);
})

function createCanvas (size) {
    eraseCanvas();

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.backgroundColor = 'white';
            row.appendChild(cell);
        }
        canvas.appendChild(row);
    }
}

function eraseCanvas () {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }
}