// interface Person {
//   firstName: string;
//   lastName: string;
// }

// function greeter(person: Person){
//   return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user = {firstName: "Jenna", lastName: "Smith"};

// document.body.innerHTML = greeter(user);

interface FilledSquare {
  filled: string;
}

enum Moves {X, O}

console.log('moves[0]: ', Moves[0])

function fillSquare(move: FilledSquare){
  return move.filled;
}

// document.getElementById('1').innerHTML = fillSquare({filled: "0"});

let turnCounter: number = 0;

let cells: any = document.getElementsByClassName('cell');
 console.log('cells: ', cells);

 for (let i=0; i<cells.length; i++){
    cells[i].addEventListener('click', ()=> {
      if (turnCounter%2 === 0){
        cells[i].innerHTML = fillSquare({filled: "X"});
        turnCounter++;
      } else {
        cells[i].innerHTML = fillSquare({filled: "O"});
        turnCounter++;
      }
    })
 }


