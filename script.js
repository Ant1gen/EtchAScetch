let container = document.getElementById("container");
let button = document.getElementById("reset");

function changeColor(){
    let color = this.style.backgroundColor;
    switch (color) {
        case 'red':
            this.setAttribute('style', 'background : orange');
            break;
        case 'orange':
            this.setAttribute('style', 'background : yellow');
            break;
        case 'yellow':
            this.setAttribute('style', 'background : green');
            break;
        case 'green':
            this.setAttribute('style', 'background : blue');
            break;
        case 'blue':
            this.setAttribute('style', 'background : violet');
            break;
        case 'violet':
            this.setAttribute('style', 'background : red');
            break;
        default:
            this.setAttribute('style', 'background : red');
            break;
    }
    
}

function addDiv() {
    let div = document.createElement('div');
    div.classList.add('etch');
    container.appendChild(div);
    div.addEventListener('mouseover', changeColor);
}
function fillGrid(sideSize){
    container.setAttribute('style', `grid-template-columns: repeat(${sideSize}, auto); grid-template-rows: repeat(${sideSize}, auto);`)
let squaresInGrid = sideSize*sideSize;
    for (let i = 0; i< squaresInGrid; i++){
        addDiv();
    }
}

function clearGrid() {
    container.innerHTML = '';
}

function reset(){
    clearGrid();
    let size = prompt('Size.  maximum 100', '16');
    size = Number(size);
    if (size < 0){
        return;
    }
    else if (size > 100){
        fillGrid(100);
    }
    else {
    fillGrid(size);
    }
}
button.addEventListener('click', reset);
