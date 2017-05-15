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
