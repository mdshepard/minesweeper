let boardArray = [];
let mineArray = [];
let divArray = [];
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
        this.buildTheDivs();
        this.assignBombs();
        
    }

    this.buildTheDivs = function() {
        //function creating the actual html divs that represent the cells.
        for (i = 1; i < boardArray.length; i++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            container.appendChild(cell);
            cell.id = i;
            divArray.push(cell);
            cell.addEventListener("click", function(e) {
                let cellClicked = e.target;
                let cellDataItem = boardArray[cellClicked.id];

                if (cellDataItem.isBomb) {
                    // TODO do bomb stuff. call explode function
                    // TODO show all the bombs
                    // TODO end the game in whatever way
                    alert("You clicked a bomb you idiot");

                } else {
                    // If it's not a bomb
                    // Display adjacent bombs
                    cellDataItem.adjacentBombs = getAdjacentBombCount(cellClicked.id);
                    cellClicked.innerHTML = cellDataItem.adjacentBombs;

                    // TODO check if game is over

                    let stuffLeftToClick = false;
                    for (let i=1; i<divArray.length;i++) {
                        if (boardArray[i].hasBeenClicked === false && boardArray[i].isBomb === false) {
                            // Game is not over, there's unclicked shit that's not bombs.
                            stuffLeftToClick = true;
                        }
                    }
                    
                    if (stuffLeftToClick === false) {
                        // If there are no unclicked elements left that are not bombs, game is over
                        // TODO end game
                        // Display all bombs
                        alert("God dammit you did it you fantastic bitch");
                    }
                    

                }

                cellDataItem.hasBeenClicked = true;
            })
        }
    }
    this.assignBombs = function() {
        bombsToPlace = difficulty * 2;
        while (bombsToPlace <= bombsToPlace && bombsToPlace > 0) {
            bombPlaceIndex = Math.floor(Math.random() * Math.pow(board.difficulty, 2));
            let cell = boardArray[bombPlaceIndex];
            // Set a bomb if it's not there
            if (cell.hasBomb === false) {
                cell.hasBomb = true;
                bombsToPlace--;
            }
        } 
    }


    this.buildBlueprintArray = function() {
        let numberOfCellsInGrid = Math.pow(board.difficulty, 2);
        for (i = 0; i <= numberOfCellsInGrid; i++) {
            let cell = {
                index: i,
                hasBomb: false,
                hasBeenClicked: false,
                adjacentBombs: 0
            }
            boardArray.push(cell);
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

        board.difficulty = difficulties[ difficultyButton.id ]; 
        const cellDimension = 38 + 2; 
        container.style.height = container.style.width = (cellDimension * board.difficulty) + "px";
        let minesweeper = new Game()
        minesweeper.buildBoard()
    }
    )
}


function getAdjacentBombCount(idOfSquareYouJustClicked) {
	let bombCount = 0;
	let currentIndex = idOfSquareYouJustClicked;
	const adjacentSquares = getAdjacentSquares(idOfSquareYouJustClicked);

	for (i = 0; i < adjacentSquares.length; i++) {
		if (square.isBomb) {
			bombCount += 1;
		}
	}

	return bombCount;
}

function getAdjacentSquares(currentIndex) {
	const adjacentSquares = [];

	adjacentSquares += getLeftAndRight(currentIndex);

	const topSquare = boardArray[currentIndex - board.difficulty];
	adjacentSquares.add(topSquare);

	const bottomSquare = boardArray[currentIndex + board.difficulty];
	adjacentSquares.add(bottomSquare);

	// Get diagonals
	adjacentSquares.add(getLeftAndRight(topSquare.index));
	adjacentSquares.add(getLeftAndRight(bottomSquare.index));

	return adjacentSquares;
}

function getLeftAndRight(index) {
	const leftAndRight = [];

	const leftSquare = boardArray[index - 1];
	leftAndRight.add(leftSquare);

	const rightSquare = boardArray[index + 1];
	leftAndRight.add(rightSquare);

	return leftAndRight;
}



