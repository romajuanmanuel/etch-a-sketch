function generateSquares() {
    const squaresHeight = 16;
    const squaresWidth = 16;
    const squareSize = 20;
    const square = [];

    for (let i = 0; i < squaresHeight; i++) {
        for (let j = 0; j < squaresWidth; j++) {
            generateSquare();
        }
    }
}

function generateSquare(){
    const container = document.getElementById("container");
    const nuevoDiv = document.createElement("div");
  
    nuevoDiv.classList.add("square");
  

    container.appendChild(nuevoDiv);
}

generateSquares();