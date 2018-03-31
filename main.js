let boardArray = [];
let mineArray = [1];
let board = {
    difficulty: 0,
    mines: 10,
}

const difficulties = {
    easy: 8,
    medium: 10,
    hard: 12,
}
let container = document.querySelector("main");
let difficultyButtons = document.getElementsByClassName("difficultyButton");

function Game() {
    this.buildBoard = function() {
        this.buildBlueprintArray();
        let number = 1;


        for (let rowIndex = 0; rowIndex < boardArray.length; rowIndex++) {
            // console.log('rowIndex: ', rowIndex);
            
            for (let columnIndex = 0; columnIndex < boardArray[rowIndex].length; columnIndex++) {
    
                let cell = document.createElement("div");
                // cell.id = rowIndex + "," + columnIndex;  the following line is the new ES6 convention. $ is simply to signify that something is a variable.
                cell.id = `row${rowIndex}-col${columnIndex}` // to access, use cell.id.split("-").split("row")[1]
                cell.dataset.row = rowIndex;            // to access, use cell.dataset.row
                cell.dataset.column = columnIndex;
                cell.dataset.tileNumber = cellNumber;
                cell.className = "cell";
                container.appendChild(cell);
                cellNumber = cellNumber + 1;
            }
        }
        // bomb randomization
        bombPlacement = function() {
            bombPlaceIndex = Math.floor(Math.random() * Math.pow(board.difficulty, 2));
            console.log(bombPlaceIndex);
            bombsToPlace = 3;
            while (bombsToPlace < 3) {
                function assignBomb() {
                    
                }

            }

        }
        //pseudocode for bomb placement
        // bombsToPlace = 3 
        // while(bombsToPlace)
        // get square
        // bomb?
        
        bombPlacement();
    }

    this.buildBlueprintArray = function() {

        for (let rowIndex = 0; rowIndex < (board.difficulty); rowIndex++ ) {
            let row = [];
            // console.log("rowIndex: ",rowIndex);
            
            for (let columnIndex = 0; columnIndex < (board.difficulty); columnIndex++ ) {
                row.push(columnIndex);
                // console.log("columnIndex: ", columnIndex);
                
            }
            boardArray.push(row);
        }
    }
}

//difficulty button logic. Difficulty corresponds to the number of rows and columns.
for (let i = 0; i < difficultyButtons.length; i++) { 
    let difficultyButton = difficultyButtons[i];
    difficultyButton.addEventListener("click", function() {
        
        if (container.firstChild) {
            boardArray = [];
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
        }

        board.difficulty = difficulties[ difficultyButton.id ]; // option 3 (best way to do it. used the board object and )
        const cellDimension = 38 + 2; // if cells already exist, you can dynamically get the width by accessing one's .style.width property
        container.style.height = container.style.width = (cellDimension * board.difficulty) + "px";
        // container.style.width = (40 * board.difficulty) + "px";
        let minesweeper = new Game()
        minesweeper.buildBoard()
    }
)
}