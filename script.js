


function arithmetik_Operation(valu) {
  let operation = valu;
  if (first === " ") {
    alert("First chose a number")
    return;
  }
  switch (operation) {
    case "+":
      myArray = "+"
      secondNumberTurn = true;
      document.getElementById("inhalt").textContent = first + " " + operation;
      break;
    case "-":
      myArray = "-"
      secondNumberTurn = true;
      document.getElementById("inhalt").textContent = first + " " +operation;
      break;
    case "*":
      myArray = "*"
      secondNumberTurn = true;
      document.getElementById("inhalt").textContent = first + " " + operation;
      break;
    case "/":
      myArray = "/"
      secondNumberTurn = true;
      document.getElementById("inhalt").textContent = first + " " + operation;
      break;


  }
}

let myArray = " ";

let first = " ";
let second = " ";
let default1 = " ";
let secondNumberTurn = false;

function takeValue(val) {
  if (secondNumberTurn) {
    second = second + val;
    document.getElementById("inhalt").textContent = first + " " + myArray + second;
  } else {
    first = first + val;
    document.getElementById("inhalt").textContent = first;
  }



}

function executeOperation() {
  switch (myArray) {
    case "+":
      let sum = parseInt(first) + parseInt(second)
      document.getElementById("inhalt").textContent = sum;
      reset();
      break;

    case "-":
      let sub = parseInt(first) - parseInt(second)
      reset();
      document.getElementById("inhalt").textContent = sub;
      break;
    case "*":
      let mult = parseInt(first) * parseInt(second)
      reset();
      document.getElementById("inhalt").textContent = mult;
      break;
    case "/":
      let divi = parseInt(first) / parseInt(second)
      reset();
      document.getElementById("inhalt").textContent = divi;
      break;
  }



}

function reset() {

  first = " ";
  second = " ";
  secondNumberTurn = false;
}
function restart() {
  first = " ";
  second = " ";
  secondNumberTurn = false;
  document.getElementById("inhalt").textContent = default1;
  myArray = " ";


}


