'use strict'


const MINE = '💣'
const FLOOR = ''
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
    gGame.isOn = true
    renderBoard(gBoard);
}



function buildBoard() {

    var board = createMat(4, 4);
    //console.log(board);

    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            var cell = {
                minesAroundCount: 4,
                isShown: true,
                isMine: false,
                isMarked: true
            }
            board[i][j] = cell;
            if ((i === 1 && j === 3) || (i === 2 && j === 1)) cell.isMine = true
        }
    }

    console.table(board);
    return board;
}



// Render the board to an HTML table
function renderBoard(board) {

    var strHTML = '';
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>\n';
        for (var j = 0; j < board[0].length; j++) {
            var currCell = board[i][j];

            var cellClass = getClassName({ i: i, j: j })

            if (currCell.isMine) cellClass += ' mine';
            else cellClass += ' floor';

            strHTML += '\t<td class="cell ' + cellClass + '"  onclick="moveTo(' + i + ',' + j + ')" >\n';

            if (currCell.isMine === true) strHTML += MINE;
            else strHTML += FLOOR;

            strHTML += '\t</td>\n';
        }
        strHTML += '</tr>\n';
    }

    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHTML;
}



// Returns the class name for a specific cell
function getClassName(location) {
    var cellClass = 'cell-' + location.i + '-' + location.j;
    return cellClass;
}




function renderCell(location, value) {
	var cellSelector = '.' + getClassName(location)
	var elCell = document.querySelector(cellSelector);
	elCell.innerHTML = value;
}