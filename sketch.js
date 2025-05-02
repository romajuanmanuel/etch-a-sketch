function generateSquares(gridSize = 16) {
    const container = document.getElementById("container");
    container.innerHTML = '';

    const containerSize = 480; // Tamaño fijo del contenedor
    const squareSize = containerSize / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseover", function () {
            this.style.backgroundColor = getRandomColor();
            this.style.transition = "background-color 0.3s ease";
            this.style.opacity = 1;
        });

        container.appendChild(square);
    }
}

function changeGridSize() {
    const newSize = prompt("¿Cuántos cuadrados por lado quieres en la cuadrícula? (1-100)?");
    const size = parseInt(newSize);

    if (size > 0 && size <= 100) {
        generateSquares(size);
    } else {
        alert("Por favor, introduce un número entre 1 y 100.");
    }
}

function getRandomColor() {
 
    const r = Math.floor(Math.random() * 256);  
    const g = Math.floor(Math.random() * 256);  
    const b = Math.floor(Math.random() * 256); 
    return `rgba(${r}, ${g}, ${b})`;

}



document.addEventListener("DOMContentLoaded", () => {
    generateSquares(); // Cuadrícula inicial

    document.getElementById("changeSize").addEventListener("click", changeGridSize);
    document.getElementById("reset").addEventListener("click", () => generateSquares());
});
