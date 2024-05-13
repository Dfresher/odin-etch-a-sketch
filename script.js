let grid_x = 16;
let grid_y = 16;

const container = document.querySelector('.container');

for (let i = 0; i < grid_x; i++) {
    const div_x = document.createElement('div');
    div_x.style.cssText = 'display: flex; flex-direction: row';
    for (let j = 0; j < grid_y; j++) {
        const div_y = document.createElement('div');
        div_y.style.cssText = 'height: 50px; width: 50px; background-color: grey; margin: 5px;';
        div_y.addEventListener('mouseenter', () => {
            div_y.style.backgroundColor = 'orange';
            div_y.style.cssText = div_y.style.cssText + ' animation-name: x; animation-duration: 0s; '
        })
        div_y.addEventListener('mouseleave', () => {
            div_y.style.cssText = div_y.style.cssText + ' animation-name: color-change; animation-duration: 2s; '
            div_y.style.backgroundColor = 'grey'
        })
        div_x.appendChild(div_y);
    }
    container.appendChild(div_x);
}
