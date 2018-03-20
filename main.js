let boardArray = [];
var board = {
    difficulty: 0,
    mines: 10,
}

const difficulties = {
    easy: 8,
    medium: 10,
    hard: 12,
}

var container = document.querySelector("main");
var difficultyButtons = document.getElementsByClassName("difficultyButton");

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
        // switch ( difficultyButton.id ) { // option 2
        //     case "easy":
        //         board.difficulty = 8;
        //         break;
        //     case "medium":
        //         board.difficulty = 10;
        //         break;
        //     case "hard":
        //         board.difficulty = 12;
        //         break;
        // }


        board.difficulty = difficulties[ difficultyButton.id ]; // option 3 (best way to do it)

        // if (difficultyButton.id === "easy") { // option 1
        //     board.difficulty = 8;

        // } else if (difficultyButton.id === "medium") {
        //     board.difficulty = 10;

        // } else if (difficultyButton.id === "hard") {
        //     board.difficulty = 12;
        // }
        const cellDimension = 38 + 2; // if cells already exist, you can dynamically get the width by accessing one's .style.width property
        container.style.height = container.style.width = (cellDimension * board.difficulty) + "px";
        // container.style.width = (40 * board.difficulty) + "px";
        buildBoard();
    }
)
}

function buildBoard() {
    buildBlueprintArray();
    console.log('boardArray: ', boardArray);
    
    for (let rowIndex = 0; rowIndex < boardArray.length; rowIndex++) {
        // console.log('rowIndex: ', rowIndex);
        
        for (let columnIndex = 0; columnIndex < boardArray[rowIndex].length; columnIndex++) {

            let cell = document.createElement("div");
            // cell.id = rowIndex + "," + columnIndex;  the following line is the new ES6 convention. $ is simply to signify that something is a variable.
            cell.id = `row${rowIndex}-col${columnIndex}` // to access, use cell.id.split("-").split("row")[1]
            cell.dataset.row = rowIndex;            // to access, use cell.dataset.row
            cell.dataset.column = columnIndex;
            cell.className = "cell";
            container.appendChild(cell);
            console.log('add a div');

        }
    }
    
}

//buildBlueprintArray is a function that creates an array that we can use as a general reference for the state of the board.
function buildBlueprintArray() {

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


