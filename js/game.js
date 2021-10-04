'use strict'


const MINE = '💣'


var gBoard;


var gLevel = {
    SIZE: 4,
    MINES: 2
}


var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}







function initGame() {

    gBoard = buildBoard()
    createMines(gBoard)
    printMat(gBoard, '.board-container')
    gGame.isOn = true
}


function buildBoard() {

    var SIZE = 4;
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = MINE;
        }
    }

    return board;
}




function createMine(board) {
    var mine = {
        location: {
            i: 3,
            j: 3
        },
        currCellContent: FOOD
    }

    gGhosts.push(ghost);
    board[ghost.location.i][ghost.location.j] = GHOST;
}



function createMines(board) {
    gGhosts = []
    createMine(board);
    createMine(board);

}




