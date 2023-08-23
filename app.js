let button = document.querySelector('.size');
let color = "black";
let clearButton = document.querySelector('.clear');

function gridMaker(size){
    let board = document.querySelector('.board');
    board.style.backgroundColor = 'grey';
    let divs = board.querySelectorAll('div');
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    let divSquares = size * size;
    for(i = 0; i < divSquares; i++){
        let grid = document.createElement('div');
        grid.style.border = "2px solid";
        grid.addEventListener("mouseover", colorful);
        divs.forEach((div) => div.remove());
        board.appendChild(grid);
    }
    if(divSquares > 256){
        alert("That's too many squares. Please select a smaller size.")
    }

}
button.addEventListener('click', gridMaker)

function colorful(){
    if(color === "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360 }, 80%, 50%)`
    }else{
    this.style.backgroundColor = color;
    }
}

function multiColor(colors){
    color = colors;
}

function clearGrid(){
    let board = document.querySelector('.board');
    let divs = board.querySelectorAll('div');
    divs.forEach((div) => div.remove());

}