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



document.getElementById('1').innerHTML = fillSquare({filled: "0"});


