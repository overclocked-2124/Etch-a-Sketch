const container = document.getElementById('container');

function setGrid(n){
    container.innerHTML = '';
    for(i=0;i<n;i++){
        const gridContainer =document.createElement('div');
        gridContainer.classList.add('grid-container');
        container.appendChild(gridContainer);
        for(j=0;j<n;j++){
            const newDiv =document.createElement('div');
            newDiv.classList.add('grids');
            gridContainer.appendChild(newDiv);
        }
    }
}



document.getElementById('gridForm').addEventListener('submit',function(event){
    event.preventDefault();
    let value = document.getElementById('gridSize').value;
    let numberValue = parseInt(value);
    console.log(numberValue);
    setGrid(numberValue);
})