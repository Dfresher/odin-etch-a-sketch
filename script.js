let grid = 0;

const button = document.querySelector('button');

button.addEventListener('click', () => {
    do {
        grid = prompt('new grid size:');
    } while (isNaN(grid) || grid > 100 || grid < 1);
    remove_grid();
    draw_grid(grid);
});

draw_grid(16);

function draw_grid(grid) {
    let square_px = 440 / grid;
    const container = document.querySelector('.container');

    for (let i = 0; i < grid; i++) {
        const div_x = document.createElement('div');
        div_x.style.cssText = 'display: flex; flex-direction: row';
        for (let j = 0; j < grid; j++) {
            const div_y = document.createElement('div');
            div_y.style.cssText = `height: ${square_px}px; width: ${square_px}px; background-color: grey; margin: 1px;`;
            div_y.addEventListener('mouseenter', () => {
                div_y.style.backgroundColor = 'orange';
                div_y.style.cssText = div_y.style.cssText + ' animation-name: x; '
            })
            div_y.addEventListener('mouseleave', () => {
                div_y.style.cssText = div_y.style.cssText + ' animation-name: color-change; animation-duration: 2s; '
                div_y.style.backgroundColor = 'grey'
            })
            div_x.appendChild(div_y);
        }
        container.appendChild(div_x);
    }
}

function remove_grid() {
    const container = document.querySelector('.container');
    container.remove();
    const wider_container = document.querySelector('.wider-container');
    const new_container = document.createElement('div');
    new_container.classList.add('container');
    wider_container.appendChild(new_container);
}