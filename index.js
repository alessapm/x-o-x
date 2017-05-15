// interface Person {
//   firstName: string;
//   lastName: string;
// }
var Moves;
(function (Moves) {
    Moves[Moves["X"] = 0] = "X";
    Moves[Moves["O"] = 1] = "O";
})(Moves || (Moves = {}));
console.log('moves[0]: ', Moves[0]);
function fillSquare(move) {
    return move.filled;
}
document.getElementById('1').innerHTML = fillSquare({ filled: "0" });
var turnCounter = 0;
var cells = document.getElementsByClassName('cell');
console.log('cells: ', cells);
var _loop_1 = function (i) {
    cells[i].addEventListener('click', function () {
        if (turnCounter % 2 === 0) {
            cells[i].innerHTML = fillSquare({ filled: "X" });
        }
        else {
            cells[i].innerHTML = fillSquare({ filled: "O" });
        }
    });
};
for (var i = 0; i < cells.length; i++) {
    _loop_1(i);
}
