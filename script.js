const canvas = document.getElementById('canvas');
const size = 16;

for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    
    for (let j = 0; j < size; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.classList.add(`row${i}-col${j}`);
        cell.style.backgroundColor = 'white';
        row.appendChild(cell);
    }
    canvas.appendChild(row);
}

canvas.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'black';
})