const canvas = document.getElementById('canvas');
const sizeSlider = document.getElementById('sizeSlider');
const resetBtn = document.getElementById('reset');
const size = 16;
let isMouseDown = false;
let isRightClick = false;
createCanvas(size);

canvas.addEventListener('mousedown', (e) => {
    e.preventDefault()
    isMouseDown = true;
    isRightClick = e.button === 2;
    paint(e.target, isRightClick ? 'white' : 'black');
});

canvas.addEventListener('mouseup', () => {
    isMouseDown = false;
});

canvas.addEventListener('mouseleave', () => {
    isMouseDown = false;
})

canvas.addEventListener('mouseover', (e) => {
    paint(e.target, isRightClick ? 'white' : 'black');
})

resetBtn.addEventListener('click', () => {
    const cells = canvas.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    })
})

canvas.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

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

function paint (cell, color='black') {
    if (!(cell === canvas) && isMouseDown) {
        cell.style.backgroundColor = color;
    }
}