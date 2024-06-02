const canvas = document.getElementById('canvas');
let size = 16;
canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.style.backgroundColor = 'white';
    canvas.appendChild(div);
}