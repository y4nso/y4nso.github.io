
document.getElementById('cacaButton').addEventListener('click', function(event) {
    createCaca(event.pageX, event.pageY);
});

document.addEventListener('click', function(event) {
    if (event.target.id !== 'cacaButton') {
        createCaca(event.pageX, event.pageY);
    }
});

function createCaca(x, y) {
    const caca = document.createElement('div');
    caca.className = 'caca';
    caca.style.left = `${x}px`;
    caca.style.top = `${y}px`;
    caca.textContent = '💩';
    document.body.appendChild(caca);

    setTimeout(() => {
        caca.remove();
    }, 2000);
}
